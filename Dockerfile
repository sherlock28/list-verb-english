FROM node:16-alpine3.14
WORKDIR /app
COPY package*.json ./
COPY ./ ./
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]