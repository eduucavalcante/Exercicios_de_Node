const express = require('express');
const app = express();
const routes = require('./routes/router');
const handlebars = require('express-handlebars');

//Handlebars
app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//Express config
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

//Rotas
app.use('/', routes);

//Servidor
const PORT = 8081;
app.listen(PORT, () => {
    console.log(`Servidor rodando na URL http://localhost:${PORT}/`);
});