const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const nodeFetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

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

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
app.use(express.json());

// Autorize frontend access (localhost:3000)
app.use(cors({
  origin: "http://localhost:3000"
}));

// Get OpenAI API key from .env
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
if (!OPENAI_API_KEY) throw new Error("OPENAI_API_KEY manquante dans .env");

// Get chatbot text from file
const CHATBOT_TEXT = fs.readFileSync(path.join(__dirname, "chatbotText.txt"), "utf8");

// Handle chat request
app.post("/api/chat", async (req: any, res: any) => {
  const { message, conversation = [] } = req.body;
  if (!message) return res.status(400).json({ error: "Message manquant" });

  const prompt = `Vous êtes un assistant IA. Vous ne répondez qu'aux questions qui peuvent être répondues STRICTEMENT à partir du texte suivant :\n\n${CHATBOT_TEXT}\n\nSi vous ne savez pas, dites « Désolé, je ne sais pas. »`;

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
        model: "gpt-3.5-turbo",
        messages,
        temperature: 0.1,
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
