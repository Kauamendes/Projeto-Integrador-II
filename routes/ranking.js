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
       var select =  conn.query(` SELECT * FROM jogadores ORDER BY pontuacao DESC `, (err, results) => {
            Nresult = results.length;
            console.log(results[0]);
            console.log("Tamanho do Array results = "+results.length);
            Nresult = results;
            id = select;
            dados();
            
            function dados() {
             while(n < results.length) {
                            
                    id = results[0+(n)].id;
                    nome = results[0+(n)].nome;
                    email = results[0+(n)].email;
                    senha = results[0+(n)].senha;
                    vidas = results[0+(n)].vidas;
                    pontuacao = results[0+(n)].pontuacao;
                    console.log(nome)
                    n++;
                      }
                     
            }
           res.render('ranking' , {
               Nresult: Nresult
           })
            
        }); 
    }); 
 
});
module.exports = router;