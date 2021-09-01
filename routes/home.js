const express = require('express');
const { request } = require('http');
const router = express.Router();
const path = require('path');

router.get('/', (req, res, next) => {
    res.sendFile('home.html', { root: './Web' });

    const vidas = {
         vidas: req.body.vidas,
    };   

    const pontuacao = {
        pontuacao: req.body.pontuacao,
   };  
});

router.put('/' , (req,res,next) => {

});

module.exports = router;