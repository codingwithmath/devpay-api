const routes = require('express').Router();
const devController = require('./controllers/dev');
const techController = require('./controllers/tech');

routes
.post('/dev', devController.store)

.get('/tech/:name', techController.read)
.post('/tech', techController.store)
.post('/tech/salary', techController.update)

module.exports = routes;