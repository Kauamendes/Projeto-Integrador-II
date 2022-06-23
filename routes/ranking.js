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

module.exports = router;