const bcrypt = require('bcryptjs');

const { getDB } = require('../db/connect');

const generateToken = require('../utils/generateToken');

async function register(req, res) {

    try {

        const db = getDB();

        const {
            name,
            email,
            password,
            role
        } = req.body;

        const existingUser = await db
            .collection('users')
            .findOne({ email });

        if (existingUser) {

            return res.status(400).json({
                message: 'User already exists'
            });
        }

        const hashedPassword = await bcrypt.hash(
            password,
            10
        );

        const user = {
            name,
            email,
            password: hashedPassword,
            role,
            createdAt: new Date()
        };

        const result = await db
            .collection('users')
            .insertOne(user);

        res.status(201).json({
            message: 'User registered',
            result
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
}

async function login(req, res) {

    try {

        const db = getDB();

        const {
            email,
            password
        } = req.body;

        const user = await db
            .collection('users')
            .findOne({ email });

        if (!user) {

            return res.status(400).json({
                message: 'Invalid email'
            });
        }

        const isMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!isMatch) {

            return res.status(400).json({
                message: 'Invalid password'
            });
        }

        const token = generateToken(user);

        res.json({
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
}

module.exports = {
    register,
    login
};