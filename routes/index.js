
const express = require('express');
const router = express.Router();

router.use('/contacts', require('./contacts'))

module.exports = router;

// const routes = require('express').Router();

// routes.get('/', lesson1.markRoute);

// routes.get('/lillian', lesson1.lillianRoute);

// routes.get('/tyler', lesson1.tylerRoute);

// module.exports = routes;