const express = require('express');
const router = express.Router();
const path = require('path');
const jwt = require('jsonwebtoken');
const mysql = require('../mysql').pool;
const bcrypt = require('bcrypt');


router.get('/', (req , res, next) => {
    res.sendFile('login.html', { root: './Web' });
 });

    router.post('/', (req, res, next) => {
            mysql.getConnection(function(error, conn )  {
                if(error) { return res.status(500).send({ error: error}) }
                const {nome, email, senha} = req.body;
                conn.query = ('SELECT email FROM jogadores WHERE email = ?' , req.body.email, (error, results) => {
                    if(error) {
                        console.log(error);
                    } 
                     conn.query = ('SELECT senha FROM jogadores WHERE senha = ?' , req.body.senha, (error, results) => {
                    if(results.length > 0) {
                        return res.render('/home');
                    }
                })
                })
            })
    
        });
    

        
  

    

        module.exports = router;