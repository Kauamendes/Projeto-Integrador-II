const express = require('express');
const router = express.Router();
const session = require('express-session');
const mysql = require('../postgres').pool;

var email = "";
var pontos = 0;
var vidas = 0;

router.get('/', (req, res, next) => {
    res.sendFile('home.html', { root: '../views/Web' });
 });

var session = req.session;
email = session.email;
vidas = req.body.valorvidas;
pontos = req.body.valorpontos;
 

module.exports = router;