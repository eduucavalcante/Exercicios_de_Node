const Sequelize = require('sequelize');
const database = require('../config/connection');

const Notes = database.define('Notes', {
    title: Sequelize.STRING,
    text: Sequelize.TEXT
});

module.exports = Notes;
