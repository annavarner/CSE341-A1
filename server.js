const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Mark Varner');
});

app.get('/lillian', (req, res) => {
    res.send('Lillian Varner');
});
app.get('/tyler', (req, res) => {
    res.send('Tyler Varner');
});


const port = 3000;

app.listen(process.env.port || port);
console.log('Web Server is listening as port ' + (process.env.port || port));

