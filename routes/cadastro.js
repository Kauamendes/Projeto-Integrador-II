const express = require('express');
const router = express.Router();
const path = require('path');
const bcrypt = require('bcrypt');
const mysql = require('../mysql').pool;

router.get('/', (req, res, next) => {
    res.sendFile('cadastro.html', { root: './Web' });
});

router.post('/', (req, res, next) => {
    mysql.getConnection(function(err, conn) {
        conn.query('SELECT email FROM jogadores WHERE email = ?', [req.body.email], (error, results) => {
            if (error) { return res.status(500).send({ error: error }) }
            if (results.length > 0) {
              
            } else {
                bcrypt.hash(req.body.senha, 10, (errBcrypt, hash) => {
                    if (errBcrypt) { return res.status(500).send({ error: errBcrypt }) }
                    conn.query(
                        'INSERT INTO jogadores (nome, email, senha) VALUES (?, ?, ?)',
                        [req.body.nome,
                         req.body.email,
                         req.body.senha],
                        (error, results) => {
                            conn.release();
                            if (error) { return res.status(500).send({ error: error }) }
                            response = {
                                mensagem: 'Jogador criado com sucesso',
                                usuarioCriado: {
                                    id: results.insertId,
                                    email: req.body.email
                                }
                            }
                            return res.status(201);
                        })
                });
            }
        })

    });
 
    res.redirect("/login");
    const jogador = {
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha
    };
    res.status(201).send({
    message: 'jogador criado com sucesso'
    });
    
});


module.exports = router;