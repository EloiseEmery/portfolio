#!/bin/bash

# Start the backend
cd backend
npm install
npx tsc index.ts
node index.js &

# Start the frontend
cd ../frontend
npm install
npm start

wait