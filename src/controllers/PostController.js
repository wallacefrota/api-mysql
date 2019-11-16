// DEVELOPED BY: WALLACE FROTA - @frotadev

// importando model de post
const Post = require('../models/Post');

// exportando funções das rotas do model
module.exports = {
    async index(req, res) {
        // rota que exibe todas as postagens
        const postagens = await Post.findAll();

        return res.json(postagens)
    },
    async show(req, res) {
        // exibir uma postagem específica pelo id
        const postagens = await Post.findOne({where: {id: req.params.id}});

        return res.json(postagens);
    },
    async postapp(req, res) {
        // criando postagens
        const postagens = await Post.create(req.body);

        return res.json(postagens);
    },
    async update(req, res) {
        // update dos dados via id
        await Post.update({
            title: req.body.title,
            description: req.body.description,
            url: req.body.url},

            {where: {id: req.params.id}} // atualizando pelo id condição where
        )

        return res.send()
    },
    async delete(req, res) {
        // deletar postagem pelo id
        await Post.destroy({where: {id: req.params.id}});

        return res.send();
    }
}