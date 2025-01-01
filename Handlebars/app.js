require('dotenv').config();
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize');

//Configurando Template Engine
app.engine('handlebars', handlebars.engine({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('views', './views');

//Configurando banco de dados
const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
	host: process.env.HOST,
	dialect: process.env.DIALECT
});

//Rotas
app.get('/', (req, res) => {
	res.render('home', {
		message: "Usando handlebars no Node.js"
	});
});

const PORT = 8081;
app.listen(PORT, () => {
	console.log(`Servidor rodando em http://localhost:${PORT}/`);
});
