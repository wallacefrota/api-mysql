// módulo sequelize
const Sequelize = require('sequelize');

// fazendo conexão ao banco de dados. "nomebd", "usuário", "senha"
const sequelize = Sequelize.define('api', 'root', '12345', {
    host: 'localhost',
    dialect: 'mysql'
});

// verificando se conexão foi bem-sucedida
sequelize.authenticate().then(() => {
    console.log("Conexão com BD realizada");
}).catch((error) => {
    console.log("Erro ao se conectar ao BD" + error);
})

// exportando módulo de conexão
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}