const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const session = require("express-session");
const postgres = require('../postgres').pool;
const Jogador = require('../models/Jogador');




router.get('/', (req, res, next) => {
    res.sendFile('cadastro.html', { root: './Web' });
});

router.post('/', (req, res, next) => {
    var name = req.body.nome;
    var mail = req.body.email;
    var pass = req.body.senha;
   const createPlayer = Jogador.create({ nome: name, email: mail, senha: pass, vidas:0, pontuacao:0});
});

module.exports = router;