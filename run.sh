## Start project in dev mode
## so you can make builds faster than with Docker

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