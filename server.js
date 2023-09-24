const express = require('express');
const app = express();
const port = 3000;

// const dotenv = require('dotenv');
// dotenv.config();

app.use('/', require('./routes/contacts'));

app.listen(process.env.port || port);
console.log('Web Server is listening as port ' + (process.env.port || port));

