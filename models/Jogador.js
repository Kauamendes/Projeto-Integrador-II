const Sequelize = require('sequelize');
const db = require('../postgres');

const Jogador = db.define('jogadores', {
    id: { 
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }, 
    nome: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    senha: { 
        type: Sequelize.STRING
    },
    vidas: {
        type: Sequelize.INTEGER
    },
    pontuacao: {
    type: Sequelize.INTEGER
    }
})

module.exports = Jogador;