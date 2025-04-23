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

### 3. Add your frontend port number to authorize frontend access
1. Open `backend/index.ts` and replace `3000` with your frontend port number
```typescript
app.use(cors({
  origin: "http://localhost:3000"
}))
```

### 4. Install Dependencies and Run Development Server
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
