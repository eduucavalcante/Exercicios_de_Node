import database from '../config/connection.js';
import Sequelize from 'sequelize';

const Note = database.define('Notas', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Note.sync({ force: false });

export default Note;
