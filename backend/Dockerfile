# Use Node.js Alpine
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY tsconfig.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Build TypeScript
RUN npm run build

# Copy chatbotText.txt to dist directory
RUN cp chatbotText.txt dist/

# Expose port 3001
EXPOSE 3001

# Start the application
CMD ["npm", "start"]
