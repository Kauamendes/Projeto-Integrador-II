const express = require('express');
const router = express.Router();
const session = require('express-session');
const mysql = require('../mysql').pool;

var email = "";
var pontos = 0;
var vidas = 0;

router.get('/', (req, res, next) => {
    res.sendFile('home.html', { root: './Web' });
 });

router.post('/', (req, res, next) => {

var session = req.session;
email = session.email;
vidas = req.body.valorvidas;
pontos = req.body.valorpontos;

     mysql.getConnection(function(err, conn) {
         conn.query('UPDATE jogadores set pontuacao=?,vidas=? where email=? ', [pontos,vidas,email], (error, resultsUpdate) => {
             console.log(resultsUpdate);
             console.log("vidas:  "+vidas);
             console.log("pontos:  "+pontos);
             console.log("email:  "+email);
             res.status(201).send;
             res.redirect('/home');
         });
     })
     
 });
 

module.exports = router;