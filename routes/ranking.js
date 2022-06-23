<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const postgres = require('../postgres').pool;
const Jogador = require('../models/Jogador');

var Nresult = [];


router.get('/', function(req, res, next)  {
            const jogadores = Jogador.findAll();
            console.log(jogadores);
            Nresult = jogadores;
            res.status(200).send;
        }); 

=======
const express = require('express');
const router = express.Router();
const path = require('path');
const mysql = require('../mysql').pool;

router.get('/ranking', (req, res, next) => {
    res.sendFile('ranking.html', { root: './Web' });
});

router.put('/update/ranking', function(req, res, next)  {

    var vidas = req.body.vidas;
    var pontuacao = req.body.pontuacao;

    mysql.getConnection(function(err, conn) {
        conn.query(' UPDATE jogadores SET pontuacao=?, vidas=? WHERE email=? ' , [pontuacao,vidas,req.body.sessao], (err, results) => {
            console.log(results)
            res.send('Atualiza Pontuação do usuario cujo email é:'+ req.body.sessao);
        }); 
    });
    
})

>>>>>>> 431ca6e4fe4cc75a866f4664c06308a558358dda
=======
>>>>>>> cd039dff996dfa60743632ba8f11ae35d5514da3
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

<<<<<<< HEAD
=======
>>>>>>> 3ee4026d003ba4897d8df7614f2fba3d378de321
>>>>>>> cd039dff996dfa60743632ba8f11ae35d5514da3
module.exports = router;