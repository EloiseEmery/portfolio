# Use Node.js Alpine
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Expose port 3001
EXPOSE 3001

# Start the application
CMD ["node", "index.js"]
