// importando modulos
const express = require('express');
const routes = express.Router();

// importando o controle das postagens
const PostController = require('./controllers/PostController');
// rotas
routes.get('/postagens', PostController.index);

// exportando routes
module.exports = routes;