require('dotenv').config();

const express = require('express');
const cors = require('cors');

const proxy = require('express-http-proxy');

const app = express();

app.use(cors());

app.use(
    '/api/auth',
    proxy('http://localhost:5001', {
        proxyReqPathResolver: function(req) {

            return `/api/auth${req.url}`;
        }
    })
);

app.use(
    '/api/employees',
    proxy('http://localhost:5002', {
        proxyReqPathResolver: function(req) {

            return `/api/employees${req.url}`;
        }
    })

);



app.listen(5000, () => {
    console.log('API Gateway Running');
});