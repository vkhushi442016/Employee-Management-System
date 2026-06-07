FROM node:20

WORKDIR /app

COPY services/auth-service/package*.json ./

RUN npm install

COPY services/auth-service ./

EXPOSE 5001

CMD ["node", "index.js"]