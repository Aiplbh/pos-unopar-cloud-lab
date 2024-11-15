const express = require ('express');

const app = express();

// Criação das rotas

app.get("/", (req, res) => {
    res.json({
        message: "Olá, Mundo!"
    });
});

// Definição da Porta

const PORT = 3000;

app.listen(process.env.PORT || 3000, () => {
    console.log ('Rodando na porta ' + PORT)
});

