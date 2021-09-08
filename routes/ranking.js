const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

var Nresult = [];
var m = 1;
var n = 0;
var id;
var nome = "kaua";
var email = "";
var senha = "";
var pontuacao = 0;
var vidas = 0;

router.get('/', async function(req, res, next)  {
    mysql.getConnection(function(err, conn) {
        conn.query(` SELECT * FROM jogadores ORDER BY pontuacao DESC `, (err, results) => {
            Nresult = results.length;
            console.log(results[0]);
            console.log("Tamanho do Array results = "+results.length);
            Nresult = results;

            res.status(304).send;
           res.render('ranking' , {
               Nresult: Nresult
           })
            
        }); 
    }); 
 
});

router.get('/',  function(req, res, next)  {
    mysql.getConnection(function(err, conn) {
        conn.query(' UPDATE jogadores set pontuacao=?, vidas=? where email=?', [req.body.vidas], [req.body.pontuacao], [req.body.email], (error, results) => {
            console.log(results);
            res.status(200).send;
            res.render('rankingDados');
        });
    })
});

module.exports = router;