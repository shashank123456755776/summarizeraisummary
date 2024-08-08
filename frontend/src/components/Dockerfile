# Use the official Node.js image
FROM node:18.20.4

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json, and install dependencies
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install

# Copy the rest of the application code
COPY frontend /app

# Expose the port on which the app will run
EXPOSE 3000

# Command to run the React app
CMD ["npm", "start"]
