const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(express.static('Web'))
const bodyParser = require('body-parser');
const path = require('path');

const rotaLogin = require('./routes/login');
const rotaCadastro = require('./routes/cadastro');
const rotaHome = require('./routes/home');
const rotaRanking = require('./routes/ranking');



app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());


app.use('/login' , rotaLogin);
app.use('/cadastro' , rotaCadastro);
app.use('/home', rotaHome);
app.use('/ranking', rotaRanking);
app.post('/login', rotaLogin);




//quando não encontra rota ele aparecece esse erro
app.use((req, res, next) =>{
    const erro = new Error('Não encontrado')
    erro.status = 404;
    next(erro);
})

module.exports = app;