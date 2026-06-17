# Use lightweight Node.js base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package configuration
COPY package*.json ./

# Install production dependencies
RUN npm ci --only=production

# Copy application source
COPY index.js ./

# Expose port (Cloud Run defaults to PORT environment variable, usually 8080)
EXPOSE 8080

# Run the service
CMD [ "npm", "start" ]
