const amqp = require('amqplib');

let channel;

async function connectRabbitMQ() {

    try {

        const connection = await amqp.connect({
            protocol: 'amqp',
            hostname: 'localhost',
            port: 5672,
            username: 'admin',
            password: 'admin123',
        }) 

        channel =
            await connection.createChannel();

        console.log(
            'RabbitMQ Connected'
        );

    } catch (error) {

        console.log(error);
    }
}

function getChannel() {

    return channel;
}

module.exports = {
    connectRabbitMQ,
    getChannel
};