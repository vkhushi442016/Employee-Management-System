const amqp = require('amqplib');

let channel;

async function connectRabbitMQ() {
    const url = process.env.RABBITMQ_URL;

    while (true) {
        try {
            const connection = await amqp.connect(url);
            channel = await connection.createChannel();

            console.log('✅ RabbitMQ Connected');

            break; // exit loop once connected

        } catch (error) {
            console.log('⏳ RabbitMQ not ready, retrying in 3s...');
            console.log(error.message);

            await new Promise(res => setTimeout(res, 3000));
        }
    }
}

function getChannel() {
    if (!channel) {
        throw new Error('RabbitMQ channel not initialized yet');
    }
    return channel;
}

module.exports = {
    connectRabbitMQ,
    getChannel
};