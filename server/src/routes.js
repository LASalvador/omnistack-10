const { Router } = require('express');
const routes = Router();
const devController = require('./controllers/DevController');
const searchController = require('./controllers/SearchController');


routes.post('/devs', devController.store);
routes.get('/devs', devController.index);
routes.get('/search', searchController.index);

module.exports = routes;



