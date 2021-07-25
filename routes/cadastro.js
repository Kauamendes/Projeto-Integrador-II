const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const mysql = require('../mysql').pool;

router.get('/', (req, res, next) => {
    res.sendFile('cadastro.html', { root: './Web' });
});

router.post('/', (req, res, next) => {
    mysql.getConnection(function(err, conn) {
        conn.query('SELECT email FROM jogadores WHERE email = ?', [req.body.email], (error, results) => {
            if (error) { return res.status(500).send({ error: error }) }
            if (results.values > 0) {
                  return res.status(500).send({ error: error }) 
                } else {
                bcrypt.hash(req.body.senha, 10, (errBcrypt, hash) => {
                    if (errBcrypt) { return res.status(500).send({ error: errBcrypt }) }
                    conn.query(
                        'INSERT INTO jogadores (nome, email, senha,pontuacao,vidas) VALUES (?, ?, ?, 0, 0)',
                        [req.body.nome,
                         req.body.email,
                         req.body.senha],
                         res.redirect("/login"),
                        (error, results) => {
                            conn.release();
                            if (error) { return res.status(500).send({ error: error }) }
                            res = {
                                mensagem: 'Jogador criado com sucesso',
                                usuarioCriado: {
                                    id: results.insertId,
                                    email: req.body.email
                                }
                                
                            }
                 
                        })
                });
            }
           
        })

    });
});


module.exports = router;