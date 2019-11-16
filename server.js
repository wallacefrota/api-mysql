// importando pacotes/modulos
const express = require('express');
const requireDir = require('require-dir');

// app recebendo toda a função express
const app = express();

// requerendo todo o diretório de models
requireDir('./src/models');

// permitindo envio de json na aplicação
app.use(express.json())

// acesso a aplicação via porta 8081
app.listen(8081, (req, res) => {
    console.log("Aplicação iniciada");
})