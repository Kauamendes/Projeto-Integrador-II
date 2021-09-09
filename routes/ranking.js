const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;

var Nresult = [];


router.get('/', function(req, res, next)  {
    mysql.getConnection(function(err, conn) {
        conn.query(` SELECT * FROM jogadores ORDER BY pontuacao DESC `, (err, results) => {
            console.log("Tamanho do Array results = "+results.length);
            Nresult = results;
            res.status(200).send;
            res.render('ranking', {
                Nresult: Nresult
            })
            
        }); 
    }); 
 
});

module.exports = router;