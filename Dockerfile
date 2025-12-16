# https://hub.docker.com/_/node
FROM node:lts-trixie-slim

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

EXPOSE 3000

CMD ["npm", "start"]