// importando model de post
const Post = require('../models/Post');

// exportando funções das rotas do model
module.exports = {
    async index(req, res) {
        // rota que exibe todas as postagens
        const postagens = await Post.findAll();

        return res.json(postagens)
    }
}