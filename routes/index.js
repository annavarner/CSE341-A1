const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.markRoute);

routes.get('/lillian', lesson1Controller.lillianRoute);

routes.get('/tyler', lesson1Controller.tylerRoute);

module.exports = routes;