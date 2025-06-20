e# Portfolio Éloïse Emery

## 🌟 Project Overview
A modern, secure, and responsive personal portfolio website showcasing professional work and skills. Built from scratch by Éloïse Emery using cutting-edge web technologies and best practices in security and performance.

## 🚀 Features
- Modern, responsive design optimized for all devices
- Interactive UI with smooth animations and transitions
- Secure OpenAI-powered chatbot integration
- Dark/Light mode theme switching
- SEO optimization
- Secure API integrations with backend proxy
- Containerized deployment ready

## 📦 Prerequisites
- Node.js (v18.0.0 or higher)
- npm or yarn
- Docker (optional, for containerized deployment)
- OpenAI API key (for chatbot functionality)

## 🛠 Tech Stack
### Frontend
- React 18 with TypeScript
- Tailwind CSS for styling
- Framer Motion for animations
- React Query for data fetching
- React Router for navigation

### Backend
- Express.js (Node.js)
- OpenAI API integration
- Rate limiting and security middleware
- API request proxying

### DevOps
- Docker for containerization
- GitHub for versioning management

## 🔧 Setup and Installation
1. Clone the repository
   ```bash
   git clone https://github.com/EloiseEmery/portfolio.git
   cd portfolio
   ```

2. Install dependencies
   ```bash
   # Install frontend dependencies
   cd frontend
   npm install

   # Install backend dependencies
   cd ../backend
   npm install
   ```

3. Configure environment variables
   ```bash
   # In root directory
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. Start development servers
   ```bash
   # Start backend (from backend directory)
   npm run dev

   # Start frontend (from frontend directory)
   npm run dev
   ```

### 🐳 Docker Setup
```bash
# Build and run with Docker Compose
docker-compose up --build
```

### 🔒 Security Practices
- API keys and sensitive data stored securely in backend
- Backend proxy for all external API requests
- Rate limiting and request validation
- CORS configuration
- Secure headers implementation
- Regular dependency updates
- `.env` files are git-ignored

## 📝 Environment Variables
Required environment variables are documented in `.env.example`:
- `OPENAI_API_KEY`: Your OpenAI API key
- `FRONTEND_PORT`: Frontend server port (default: 3000)
- `BACKEND_PORT`: Backend server port (default: 3001)
- `REACT_APP_API_URL`: API URL for development (default: http://localhost:3001)
- `DOMAIN_NAME`: Domain name for development (default: http://localhost:8080)

## 📄 License
This project is open source and licensed under the MIT License. If you publicly reuse all or part of this code, you must give credit to the author (Éloïse Emery) and include a visible link to https://eloemery.com on your website or application (for example: in the footer, About page, or credits section). See the [MIT License](LICENSE) file for details.

## 📞 Contact
Éloïse Emery - [eloise.emery@hotmail.com](mailto:eloise.emery@hotmail.com)

Project Link: [https://github.com/EloiseEmery/portfolio]

Portfolio Link: [https://eloemery.com](https://eloemery.com)



