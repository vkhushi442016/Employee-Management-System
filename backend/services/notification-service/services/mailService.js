require('dotenv').config();

const nodemailer = require('nodemailer');

const transporter =
    nodemailer.createTransport({

        service: 'gmail',

        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

async function sendWelcomeEmail(employee) {

    try {

        const info =
            await transporter.sendMail({

                from: process.env.EMAIL_USER,

                to: employee.email,

                subject: 'Welcome To Company',

                html: `
                    <h1>
                        Welcome ${employee.name}
                    </h1>
                    

                    <p>
                        Your account has been
                        successfully created
                    </p>
                `
            });

        console.log(
            'EMAIL SENT SUCCESSFULLY'
        );

        console.log(info);

    } catch (error) {

        console.log(
            'EMAIL ERROR'
        );

        console.log(error.message);

        console.log(error);
    }
}

module.exports = {
    sendWelcomeEmail
};