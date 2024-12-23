const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.status(200).send('<h1>Exercicio de rotas com Node.js e Express.js</h1><a href="http://localhost:8081/sobre" target="_self">Página Sobre</a>');
});

router.get('/sobre', (req, res) => {
	res.status(200).send('Este repositorio tem a finalidade de praticar durante os estudos de Node.js');
});

module.exports = router;
