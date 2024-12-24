const express = require('express');
const routes = require('./routes/routes.js');
const path = require('path');
const PORT = 8081;

const app = express();

app.set('views', path.resolve(__dirname, 'views'));

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na URL http://localhost:${PORT}/`);
})
