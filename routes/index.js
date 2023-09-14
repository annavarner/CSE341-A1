const routes = require('express').Router();

const lesson1Controller = require('../controllers/lesson1');

app.get('/', lesson1Controller.markRoute);

app.get('/lillian', lesson1Controller.lillianRoute);

app.get('/tyler', lesson1Controller.tylerRoute);

module.exports = routes;