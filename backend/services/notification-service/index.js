require('dotenv').config();

const consumeEmployeeEvents =
    require('./consumers/employeeConsumer');

consumeEmployeeEvents();

console.log(
    'Notification Service Running'
);