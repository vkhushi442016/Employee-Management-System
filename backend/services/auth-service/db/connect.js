require('dotenv').config()

const { MongoClient } = require('mongodb');

const uri = process.env.MONGO_URI;
console.log(uri);

const client = new MongoClient(uri);

let db;

async function connectDB() {
    await client.connect();

    db = client.db('employee_management');

    console.log('MongoDB Connected');
}

function getDB() {
    return db;
}

connectDB()
module.exports = {
    connectDB,
    getDB
};