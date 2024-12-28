require('dotenv').config();
const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE, process.env.USERNAME, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: process.env.DIALECT
});

sequelize.authenticate().then(() => {
    console.log('Banco conectado com sucesso!');
}).catch((error) => {
    console.log(`Falha ao conectar ao banco: ${error}`);
});

module.exports = sequelize;
