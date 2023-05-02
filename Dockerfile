FROM node:latest
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 2500
CMD ["node","index.js"]