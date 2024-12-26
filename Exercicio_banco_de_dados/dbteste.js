const Sequelize = require('sequelize');
const sequelize = new Sequelize('teste_sql', 'root', '', {
	host: 'localhost',
	dialect: 'mysql'
});

sequelize.authenticate().then(() => {
	console.log("Conectado com sucesso!");
}).catch((error) => {
	console.log("Falha ao conectar: " + error);
});

const postagens = sequelize.define("postagens", {
	titulo: Sequelize.STRING,
	conteudo: Sequelize.TEXT
});

postagens.create({
	titulo: "Testando...",
	conteudo: "Teste do Sequelize com MySQL"
});

postagens.sync().then(() => {
	console.log("Banco de dados sincronizado com sucesso!");
}).catch((error) => {
	console.log(`Falha ao sincronizar o banco de dados: ${error}`);
});
