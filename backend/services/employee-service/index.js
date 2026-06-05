require('dotenv').config();

const express = require('express');
const cors = require('cors');
const {
    connectRabbitMQ
} = require("../../shared/rabbitmq");

connectRabbitMQ();

const { connectDB } = require('./db/db');

const app = express();

app.use(cors());
app.use(express.json());

connectDB();


const employeeRoutes = require('./routes/employeeRoute');

app.use('/api/employees', employeeRoutes);


app.listen(5002, () => {
    console.log('Employee Service Running 5002');
});