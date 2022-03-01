FROM node:16-alpine3.14
WORKDIR /app
COPY package*.json ./
COPY ./ ./
RUN npm ci
EXPOSE 3000
CMD ["npm", "start"]