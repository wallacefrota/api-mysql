// importando aruivo de conexão com bd
const db = require('./db');

// criando coluna postagens na bd, com seus respectivos campos e seus tipos de valores
const Post = db.sequelize.define('postagens',{
    title: {
        type: db.Sequelize.STRING,
        required: true
    },
    description: {
        type: db.Sequelize.STRING,
        required: true
    },
    url: {
        type: db.Sequelize.STRING,
        required: true
    }
});

// forçando a criação da coluna apenas uma vez no bd, após isso comentar ou excluir
// Post.sync({force: true});

// exportando
module.exports = Post;