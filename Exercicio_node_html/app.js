const express = require('express');
const routes = require('./routes/routes.js');
const PORT = 8081;

const app = express();

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na URL http://localhost:${PORT}/`);
})