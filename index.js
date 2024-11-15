const express = require ('express');

const app = express();

// Criação das rotas

app.get("/", (req, res) => {
    res.json({
        message: "Olá, Mundo!"
    });
});

app.get("/product", (req,res) => {
    res.json ([{nome: 'celular'}, {nome: 'smart TV'}, {nome: 'notebook'}]);
});

// Definição da Porta

const PORT = 3000;

app.listen(process.env.PORT || 3000, () => {
    console.log ('Rodando na porta ' + PORT)
});

