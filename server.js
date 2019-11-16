// importando pacotes/modulos
const express = require('express');
// app recebendo toda a função express
const app = express();

// acesso a aplicação via porta 8081
app.listen(8081, (req, res) => {
    console.log("Aplicação iniciada");
})