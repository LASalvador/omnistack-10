const { Router } = require('express');
const routes = Router();
const devController = require('./controllers/DevController');


routes.post('/devs', devController.store);
routes.get('/devs', devController.index);

module.exports = routes;



