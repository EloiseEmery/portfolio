"use strict";
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const nodeFetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
dotenv.config();
const app = express();
app.use(express.json());
// Autorise le frontend en dev (localhost:3000)
app.use(cors({
    origin: "http://localhost:3000"
}));
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
if (!OPENAI_API_KEY)
    throw new Error("OPENAI_API_KEY manquante dans .env");
const CHATBOT_TEXT = fs.readFileSync(path.join(__dirname, "chatbotText.txt"), "utf8");
app.post("/api/chat", async (req, res) => {
    const { message, conversation = [] } = req.body;
    if (!message)
        return res.status(400).json({ error: "Message manquant" });
    const prompt = `Vous êtes un assistant IA. Vous ne répondez qu'aux questions qui peuvent être répondues STRICTEMENT à partir du texte suivant :\n\n${CHATBOT_TEXT}\n\nSi vous ne savez pas, dites « Désolé, je ne sais pas. »`;
    const messages = [
        { role: "system", content: prompt },
        ...conversation,
        { role: "user", content: message }
    ];
    try {
        const openaiRes = await nodeFetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${OPENAI_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo", // ou gpt-4 si tu as accès
                messages,
                temperature: 0.1,
                max_tokens: 300,
            }),
        });
        const data = await openaiRes.json();
        // Add error handling for API response
        if (!openaiRes.ok) {
            throw new Error(`OpenAI API request failed with status ${openaiRes.status}: ${JSON.stringify(data)}`);
        }
        // Type guard to ensure data is OpenAIResponse
        const isOpenAIResponse = (obj) => {
            return obj &&
                Array.isArray(obj.choices) &&
                obj.choices.every((choice) => choice.message && typeof choice.message.content === 'string');
        };
        if (!isOpenAIResponse(data)) {
            throw new Error('Invalid OpenAI API response');
        }
        if (data.error)
            return res.status(500).json({ error: data.error.message });
        return res.json({ response: data.choices[0].message.content });
    }
    catch (err) {
        return res.status(500).json({ error: "Erreur API OpenAI" });
    }
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Backend lancé sur http://localhost:${PORT}`);
});
module.exports = app;
//# sourceMappingURL=index.js.map