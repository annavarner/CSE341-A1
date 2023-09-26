const express = require('express');
const routes = express.Router();

const baseController = require('../controllers');
const contactsController = require('../controllers/contacts');

routes.get('/', baseController.getName);

routes.get('/contacts', contactsController.getAll);

routes.get('/contacts/:id', contactsController.getSingle);

module.exports = routes;