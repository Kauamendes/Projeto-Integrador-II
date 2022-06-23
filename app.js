const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(express.static('Web'))
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path'); 

//configurações
app.use(session({ 
    secret: "projetodoifsc",
    resave: true,
    saveUninitialized: true
 }))

 app.set('view engine', 'ejs'); 
 app.set('views', './views');
//rotas
const rotaLogin = require('./routes/login');
const rotaCadastro = require('./routes/cadastro');
const rotaHome = require('./routes/home');
const rotaRanking = require('./routes/ranking');


app.use(morgan('dev'))
//body-parser
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());


app.use('/login' , rotaLogin);
app.use('/cadastro' , rotaCadastro);
app.use('/home', rotaHome);
app.use('/ranking', rotaRanking);
app.use('/', rotaHome);


//quando não encontra rota ele aparecece esse erro
app.use((req, res, next) =>{
    const erro = new Error('Não encontrado')
    erro.status = 404;
    next(erro);
})




module.exports = app;