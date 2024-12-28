const express = require('express');
const app = express();
const Notes = require('./models/note');

Notes.sync().then(() => {
    console.log("Banco de dados sincronizado com sucesso!");
}).catch((error) => {
    console.log(`Falha ao sincronizar: ${error}`);
});

Notes.create({
    title: "Título",
    text: "Conteúdo da nota"
});

app.listen(8081, () => {
    console.log('Servidor rodando!')
});
