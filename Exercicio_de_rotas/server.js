const express = require('express');
const routes = require('./routes');
const app = express();
const port = 8081;

app.use('/', routes);

app.listen(port, () => {
	console.log(`Servidor rodando na URL http://localhost:${port}/`);
});
