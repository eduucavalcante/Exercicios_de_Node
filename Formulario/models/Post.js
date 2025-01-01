const database = require('../config/database');
const Sequelize = require('sequelize');

const Post = database.define('Postagens', {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    conteudo: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Post.sync({force: false});

module.exports = Post;