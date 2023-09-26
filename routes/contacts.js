const express = require('express');
const routes = express.Router();

const contactsController = require('../controllers/contacts');

routes.get('/contacts', contactsController.getAll);

routes.get('/contacts/:id', contactsController.getSingle);

module.exports = routes;