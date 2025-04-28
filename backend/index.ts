const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const nodeFetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');

// Define OpenAI API response interface
interface OpenAIResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
  error?: {
    message: string;
  };
}

// Load environment variables from root .env
dotenv.config({ path: path.join(__dirname, '../.env') });

// Initialize Express app
const app = express();
app.use(express.json());

// Configure security headers with Helmet
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      connectSrc: ["'self'", "https://api.openai.com"],
      scriptSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https:"],
      fontSrc: ["'self'", "https:", "data:"],
    },
  },
  crossOriginEmbedderPolicy: true,
  crossOriginOpenerPolicy: true,
  crossOriginResourcePolicy: { policy: "same-site" },
  dnsPrefetchControl: true,
  frameguard: { action: "deny" },
  hidePoweredBy: true,
  hsts: { maxAge: 31536000, includeSubDomains: true },
  ieNoOpen: true,
  noSniff: true,
  referrerPolicy: { policy: "strict-origin-when-cross-origin" },
  xssFilter: true,
}));

// Autorize frontend access
app.use(cors({
  origin: [
    "http://localhost:8080",
    "https://eloemery.com",
    "https://www.eloemery.com"
  ],
  credentials: true,
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Apply rate limiting 
// Prevent too many requests and token abuse
const limiter = rateLimit({
  windowMs: 30 * 24 * 60 * 60 * 1000, // 1 month in milliseconds
  max: 150,
  message: "Too many requests, please try again later."
});
app.use(limiter);

// Get OpenAI API key from .env
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
if (!OPENAI_API_KEY) throw new Error("OPENAI_API_KEY manquante dans .env");

// Get chatbot text from file
const CHATBOT_TEXT = fs.readFileSync(path.join(__dirname, "chatbotText.txt"), "utf8");

// Handle chat request
app.post("/api/chat", async (req: any, res: any) => {
  const { message, conversation = [] } = req.body;

  // Error handling
  if (!message) return res.status(400).json({ error: "Message manquant" });
  if (typeof message !== 'string' || message.length > 200) {
    return res.status(400).json({ error: "Message invalide ou trop long." });
  }

  const name = "Éloïse Emery";

  // Prompt sent to OpenAI
  const prompt = `
  Tu es un assistant IA qui répond à la place de ${name} sur son site personnel (qui fait office de CV et de présentation).
  Les utilisateurs peuvent poser leurs questions en français ou en anglais.
  Réponds toujours dans la même langue que la question posée.
  
  - Réponds à la première personne, comme si tu étais ${name}, mais précise que tu es un assistant IA qui parle en son nom si nécessaire.
  - Sois chaleureuse, professionnelle et concise, fidèle au style de ${name}.
  - Ne réponds STRICTEMENT qu'aux questions dont la réponse se trouve dans le texte ci-dessous.
  - N'invente rien, n'extrapole rien, ne complète pas avec des informations extérieures.
  - Préfère les réponses directes, concises et claires.
  - Ne reprend JAMAIS les réponses du texte, reformule les dans tes mots selon le contexte.
  - Si la question ne concerne pas ${name}, ou si la réponse n'est pas présente dans le texte, dis poliment (dans la langue de la question) : 
    - Français : « Désolé, je ne peux pas répondre à cette question. »
    - Anglais : "Sorry, I can't answer that question."
  - Si la question est trop vague, invite l'utilisateur à préciser sa demande.
   
  Voici le texte de référence (en français et/ou anglais) :
  
  ${CHATBOT_TEXT}
  `;
  const messages = [
    { role: "system", content: prompt },
    ...conversation,
    { role: "user", content: message }
  ];

  // Call OpenAI API
  try {
    const openaiRes = await nodeFetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4.1",
        messages,
        temperature: 1,
        max_tokens: 1000,
      }),
    });

    // Get and parse API response
    const data = await openaiRes.json();

    // Add error handling for API response
    if (!openaiRes.ok) {
      throw new Error(`OpenAI API request failed with status ${openaiRes.status}: ${JSON.stringify(data)}`);
    }

    // Type guard to ensure data is OpenAIResponse
    const isOpenAIResponse = (obj: any): obj is OpenAIResponse => {
      return obj && 
             Array.isArray(obj.choices) && 
             obj.choices.every((choice: any) => 
               choice.message && typeof choice.message.content === 'string'
             );
    }

    // Validate response
    if (!isOpenAIResponse(data)) {
      throw new Error('Invalid OpenAI API response');
    }
    if (data.error) return res.status(500).json({ error: data.error.message });
    return res.json({ response: data.choices[0].message.content });
  } catch (err) {
    return res.status(500).json({ error: "Erreur API OpenAI" });
  }
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend lancé sur http://localhost:${PORT}`);
});

module.exports = app;
