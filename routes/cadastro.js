const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const session = require("express-session");
const mysql = require('../mysql').pool;
var email = "";



router.get('/', (req, res, next) => {
    res.sendFile('cadastro.html', { root: './Web' });
});

router.post('/', (req, res, next) => {
    var erros = "email invalido"
    mysql.getConnection(function(err, conn) {
    conn.query('SELECT email FROM jogadores WHERE email = ?', [req.body.email], (error, results) => {
        console.log(results.length);
            if (error) { return res.status(500).send({ error: ": email é invalido tente novamente!" }) }
            if (results.length > 0) {
                return res.status(500).send({ error: " email é invalido tente novamente!" })
                } else {
                bcrypt.hash(req.body.senha, 10, (errBcrypt, hash) => {
                    if (errBcrypt) { return res.status(500).send({ error: errBcrypt }) }
                    conn.query(
                        'INSERT INTO jogadores (nome, email, senha,vidas,pontuacao) VALUES (?, ?, ?, 0, 0)',
                        [req.body.nome,
                         req.body.email,
                         req.body.senha],
                         res.redirect("/login"),
                        (error, results) => {
                            conn.release();
                            if (error) { return res.status(500).send({ error: erros }) }
                            res = {
                                mensagem: 'Jogador criado com sucesso',
                                usuarioCriado: {
                                    id: results.insertId,
                                    email: req.body.email,
                                }
                            }
                 
                        })
                });
            
            }
           
        })
    });
    var email = req.body.email;
    console.log(sessao);
});

module.exports = email;
module.exports = router;