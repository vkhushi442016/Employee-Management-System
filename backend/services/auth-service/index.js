require('dotenv').config();

const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');

const { connectDB } = require('./db/connect');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

connectDB();

app.listen(process.env.PORT, () => {
    console.log(`Auth Service Running on ${process.env.PORT}`);
});