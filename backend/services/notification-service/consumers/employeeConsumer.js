const amqp = require('amqplib')

const { sendWelcomeEmail } = require('../services/mailService');


async function consumeEmployeeEvents() {

    try {
        const connection = await amqp.connect({
            protocol: 'amqp',
            hostname: 'localhost',
            port: 5672,
            username: 'admin',
            password: 'admin123',
        })

        const channel = await connection.createChannel();

        const queue = 'employee_created'

        await channel.assertQueue(queue);

        console.log("Waiting for messages...");

        channel.consume(queue, async (message) => {
            const employee = JSON.parse(message.content.toString());

            console.log("Send Welcome Email To:", employee.email)

            await sendWelcomeEmail(employee)

            channel.ack(message)
        })

    } catch (error) {
        console.log(error);
    }
}

module.exports = consumeEmployeeEvents;