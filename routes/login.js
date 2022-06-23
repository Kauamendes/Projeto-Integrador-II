const express = require('express');
const router = express.Router();
const session = require('express-session');
const Jogador = require('../models/Jogador');
const postgres = require('../postgres').pool;



router.get('/', (req , res, next) => {
    
    res.sendFile('login.html', { root: './Web' });
 });

 router.post('/', (req, res, next) => {

    var email = req.body.email; 
    var session;
    session = req.session;
    session.email = email;

        const user = Jogador.findAll({ 
            where: {
                email: email
            }
        });
        
});

    module.exports = router;
