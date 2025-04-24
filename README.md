# Portfolio Éloïse Emery

## Project Overview
Coded from scratch by Éloïse Emery, this is a modern, secure, and responsive personal portfolio website showcasing professional work and skills.

## 🚀 Features
- Responsive and modern design
- Secure API integrations
- Environment variable management
- Modern React with TypeScript and Tailwind

## 📦 Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

## 🛠 Tech Stack
- React
- TypeScript
- Tailwind
- Express (Backend, Node.js)
- OpenAI API Integration
- Docker 

## 🔧 Setup and Installation

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/portfolio.git
cd port/backend
```

### 2. Environment Configuration in backend
1. Copy `.env.example` to `.env`
2. Fill in required environment variables
   - `OPENAI_API_KEY`: Your OpenAI API key
   - `PORT`: Your port number for the backend to run on
```bash
cp .env.example .env
```

### 3. Backend Configuration
1. Still in the backend directory, access index.ts
   ```bash
   cd index.ts
   ```
2. Replace `3000` with your frontend port number to authorize frontend access
```typescript
app.use(cors({
  origin: "http://localhost:your_port_number"
}))
```
3. Replace const name value with your name and adjust the prompt if needed
```typescript
const name = "your_name";

const prompt ="..."
```

### 4. Update Chatbot Text
1. Still in the backend directory, access exampleChatbotText.txt
   ```bash
   cd exampleChatbotText.txt
   ```
2. Rename the file to chatbotText.txt
3. Replace the content with your desired text

### 5. Install Dependencies and Run Development Server
1. Simply run `./run.sh` in the root directory of the project
2. Wait for the backend and frontend to start

### 🔒 Security Practices
- API keys are never exposed to the frontend
- Backend proxy used for external API requests
- Environment variables managed securely
- `.env` files are git-ignored

## 📝 Environment Variables
Refer to `.env.example` for required configuration. Never commit actual `.env` file.

## 🤝 Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License
[MIT License](LICENSE)
