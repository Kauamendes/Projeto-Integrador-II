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

module.exports = router;