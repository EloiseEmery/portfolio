var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _this = this;
var express = require('express');
var cors = require('cors');
var dotenv = require('dotenv');
var nodeFetch = require('node-fetch');
var fs = require('fs');
var path = require('path');
var rateLimit = require('express-rate-limit');
// Load environment variables
dotenv.config();
// Initialize Express app
var app = express();
app.use(express.json());
// Autorize frontend access (localhost:3000)
app.use(cors({
    origin: "http://localhost:3000"
}));
// Apply rate limiting 
// Prevent too many requests and token abuse
var limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 20,
    message: "Too many requests, please try again later."
});
app.use(limiter);
// Get OpenAI API key from .env
var OPENAI_API_KEY = process.env.OPENAI_API_KEY;
if (!OPENAI_API_KEY)
    throw new Error("OPENAI_API_KEY manquante dans .env");
// Get chatbot text from file
var CHATBOT_TEXT = fs.readFileSync(path.join(__dirname, "chatbotText.txt"), "utf8");
// Handle chat request
app.post("/api/chat", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var _a, message, _b, conversation, prompt, messages, openaiRes, data, isOpenAIResponse, err_1;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = req.body, message = _a.message, _b = _a.conversation, conversation = _b === void 0 ? [] : _b;
                if (!message)
                    return [2 /*return*/, res.status(400).json({ error: "Message manquant" })];
                prompt = "\n  Tu es un assistant IA qui r\u00E9pond \u00E0 la place d'\u00C9lo\u00EFse Emery sur son site personnel (qui fait office de CV et de pr\u00E9sentation).\n  Les utilisateurs peuvent poser leurs questions en fran\u00E7ais ou en anglais.\n  R\u00E9ponds toujours dans la m\u00EAme langue que la question pos\u00E9e.\n  \n  - R\u00E9ponds \u00E0 la premi\u00E8re personne, comme si tu \u00E9tais \u00C9lo\u00EFse, mais pr\u00E9cise que tu es un assistant IA qui parle en son nom si n\u00E9cessaire.\n  - Sois chaleureuse, professionnelle et concise, fid\u00E8le au style d'\u00C9lo\u00EFse.\n  - Ne r\u00E9ponds STRICTEMENT qu'aux questions dont la r\u00E9ponse se trouve dans le texte ci-dessous.\n  - N'invente rien, n'extrapole rien, ne compl\u00E8te pas avec des informations ext\u00E9rieures.\n  - Si la question ne concerne pas \u00C9lo\u00EFse Emery, ou si la r\u00E9ponse n'est pas pr\u00E9sente dans le texte, dis poliment (dans la langue de la question)\u00A0: \n    - Fran\u00E7ais\u00A0: \u00AB\u00A0D\u00E9sol\u00E9, je ne peux pas r\u00E9pondre \u00E0 cette question.\u00A0\u00BB\n    - Anglais\u00A0: \"Sorry, I can't answer that question.\"\n  - Si la question est trop vague, invite l'utilisateur \u00E0 pr\u00E9ciser sa demande.\n  \n  Voici le texte de r\u00E9f\u00E9rence (en fran\u00E7ais et/ou anglais)\u00A0:\n  \n  ".concat(CHATBOT_TEXT, "\n  ");
                messages = __spreadArray(__spreadArray([
                    { role: "system", content: prompt }
                ], conversation, true), [
                    { role: "user", content: message }
                ], false);
                _c.label = 1;
            case 1:
                _c.trys.push([1, 4, , 5]);
                return [4 /*yield*/, nodeFetch("https://api.openai.com/v1/chat/completions", {
                        method: "POST",
                        headers: {
                            "Authorization": "Bearer ".concat(OPENAI_API_KEY),
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            model: "gpt-4.1",
                            messages: messages,
                            temperature: 1,
                            max_tokens: 1000,
                        }),
                    })];
            case 2:
                openaiRes = _c.sent();
                return [4 /*yield*/, openaiRes.json()];
            case 3:
                data = _c.sent();
                // Add error handling for API response
                if (!openaiRes.ok) {
                    throw new Error("OpenAI API request failed with status ".concat(openaiRes.status, ": ").concat(JSON.stringify(data)));
                }
                isOpenAIResponse = function (obj) {
                    return obj &&
                        Array.isArray(obj.choices) &&
                        obj.choices.every(function (choice) {
                            return choice.message && typeof choice.message.content === 'string';
                        });
                };
                // Validate response
                if (!isOpenAIResponse(data)) {
                    throw new Error('Invalid OpenAI API response');
                }
                if (data.error)
                    return [2 /*return*/, res.status(500).json({ error: data.error.message })];
                return [2 /*return*/, res.json({ response: data.choices[0].message.content })];
            case 4:
                err_1 = _c.sent();
                return [2 /*return*/, res.status(500).json({ error: "Erreur API OpenAI" })];
            case 5: return [2 /*return*/];
        }
    });
}); });
// Start server
var PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
    console.log("Backend lanc\u00E9 sur http://localhost:".concat(PORT));
});
module.exports = app;
