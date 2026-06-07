require('dotenv').config();

const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const { connectDB } = require('./db/connect');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5001;

async function startServer() {
    try {
        console.log("Mongo URI:", process.env.MONGO_URI);

        await connectDB(); // ✅ WAIT for DB connection

        app.listen(PORT, () => {
            console.log(`Auth Service Running on ${PORT}`);
        });

    } catch (error) {
        console.error("Failed to start Auth Service:", error);
        process.exit(1);
    }
}

startServer();