FROM node:20

WORKDIR /app

COPY services/employee-service/package*.json ./

RUN npm install

COPY services/employee-service .

COPY shared ./shared

EXPOSE 5002

CMD ["node","index.js"]