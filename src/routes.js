// DEVELOPED BY: WALLACE FROTA - @frotadev

// importando modulos
const express = require('express');
const routes = express.Router();

// importando o controle das postagens
const PostController = require('./controllers/PostController');
// rotas
routes.get('/postagens', PostController.index);
routes.get('/postagens/:id', PostController.show);
routes.post('/postagens', PostController.postapp);
routes.put('/postagens/:id', PostController.update);
routes.delete('/postagens/:id', PostController.delete);

// exportando routes
module.exports = routes;