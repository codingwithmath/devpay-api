const routes = require('express').Router();
const devController = require('./controllers/dev');

routes
.post('/dev', devController.store);

module.exports = routes;