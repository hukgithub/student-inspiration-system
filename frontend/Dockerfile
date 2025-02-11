# Use the official Node.js image
FROM node:18-alpine

# Set work directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy project files
COPY . .

# Start the React app
CMD ["npm", "start"]
