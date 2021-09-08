const express = require('express');
const { request } = require('http');
const router = express.Router();
const path = require('path');
const mysql = require('../mysql').pool;

var Nresult = [];
var email = "";
var vidas = 0;
var pontos = 0;

router.get('/', (req, res, next) => {
     mysql.getConnection(function(err, conn) {
          conn.query(` SELECT * FROM jogadores ORDER BY pontuacao DESC `, (err, results) => {
              Nresult = results;
              console.log(Nresult);
              res.status(304).send;
               email = req.body.email;
               vidas = req.body.vidas;
               pontos = req.body.pontuacao;
          }); 
      }); 
      if(req.body.email != null) {
        res.render('home');
      } else {
        res.sendFile('home.html', { root: './Web' });
      }
    });

router.post('/',  function(req, res, next)  {
     mysql.getConnection(function(err, conn) {
         conn.query('UPDATE jogadores set pontuacao=?,vidas=? where email=? ', [pontos,vidas,email], (error, resultsUpdate) => {
             console.log(resultsUpdate);
             console.log(vidas);
             console.log(pontos);
             console.log(email);
             res.status(201).send;
             res.render('ranking', {
                Nresult: Nresult
             });
         });
     })
 });
 

module.exports = router;