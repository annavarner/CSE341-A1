const express = require('express');
const app = express();
const port = 3000;
const mongodb = require('./db/connect');

app.use('/', require('./routes/contacts'));


mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(process.env.port || 3000);
        console.log('MongoDb is connected')
        console.log('Web Server is listening on port ' + (process.env.port || port));
    }
});