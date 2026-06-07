require('dotenv').config();

const express = require('express');
const cors = require('cors');
// const {
//     connectRabbitMQ
// } = require("../../shared/rabbitmq");

//For Dockerfile
const {
    connectRabbitMQ
} = require("./shared/rabbitmq");



connectRabbitMQ();

const { connectDB } = require('./db/db');

const app = express();
console.log("RABBITMQ_URL =", process.env.RABBITMQ_URL);
console.log("MONGO_URI =", process.env.MONGO_URI);
app.use(cors());
app.use(express.json());
connectDB();

const employeeRoutes = require('./routes/employeeRoute');

app.use('/api/employees', employeeRoutes);


app.listen(process.env.PORT, () => {
    console.log('Employee Service Running 5002');
});