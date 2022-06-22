const express = require('express');
const router = express.Router();
const session = require('express-session');
const postgres = require('../postgres').pool;



router.get('/', (req , res, next) => {
    
    res.sendFile('login.html', { root: './Web' });
 });

 router.post('/', (req, res, next) => {

var email = req.body.email;
var session;
session = req.session;
session.email = email;

    postgres.getConnection(function(err, conn) {
        conn.query(
            'SELECT email FROM jogadores WHERE email = ?', email, (error, resultsemail) => {
            if (resultsemail.length == 0) {
                return res.status(500).send({ error: " email é invalido tente novamente!" }),
                console.log("email e invalido!");
                    }
 
                     conn.query 
                     ('SELECT senha FROM jogadores WHERE senha = ?' , req.body.senha, (error, resultssenha) => {
                        if(resultssenha.length == 1 && resultsemail.length == 1) {
                            res.status(201).send,
                            console.log(email),
                            console.log("sessao:  "+session.email);
                            res.redirect('/home');
                        } else {
                            return res.status(500).send({ error: "Email ou senha invalidos!" }),
                            console.log("senha invalida"),
                            console.log(resultssenha.length),
                            console.log(resultsemail.length),
                            console.log(req.body.email);
                        }
                 })
             })
            }) 
    });
    

        
  
    

        module.exports = router;