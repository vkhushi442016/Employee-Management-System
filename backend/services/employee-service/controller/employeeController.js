const { ObjectId } = require('mongodb');
const { getDB } = require('../db/db');
const { getChannel } = require('../../../shared/rabbitmq')

async function createEmployee(req, res) {
    try {
        const db = getDB();

        const employee = {
            emp_id: req.body.emp_id,
            name: req.body.name,
            email: req.body.email,
            department: req.body.department,
            designation: req.body.designation,
            salary: req.body.salary,
            createdAt: new Date()
        };

        const result = await db
            .collection('employees')
            .insertOne(employee);

        const channel = getChannel();

        const queue = 'employee_created';

        await channel.assertQueue(queue);
        channel.sendToQueue(
            queue,
            Buffer.from(
                JSON.stringify(employee)
            )
        )

        res.status(201).json(result);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

async function getEmployees(req, res) {
    try {
        const db = getDB();

        const employees = await db
            .collection('employees')
            .find()
            .toArray();

        res.json(employees);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

async function updateEmployee(req, res) {
    try {
        const db = getDB();

        const id = req.params.id;

        const result = await db.collection('employees')
            .updateOne(
                { _id: new ObjectId(id) },
                {
                    $set: req.body
                }
            );

        res.json(result);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

async function deleteEmployee(req, res) {
    try {
        const db = getDB();

        const id = req.params.id;

        const result = await db
            .collection('employees')
            .deleteOne({
                _id: new ObjectId(id)
            });

        res.json(result);

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

module.exports = {
    createEmployee,
    getEmployees,
    updateEmployee,
    deleteEmployee
};