const express = require('express');
const morgan = require('morgan');
const app = express();
app.use(express.static('Web'))
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path'); 

//configurações
const oneHour = 1000 * 60 * 60 * 1;
app.use(session({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneHour },
    resave: false 
}));

 app.set('view engine', 'ejs'); 
 app.set('views', './views');
//rotas
const rotaLogin = require('./routes/login');
const rotaCadastro = require('./routes/cadastro');
const rotaHome = require('./routes/home');
const rotaRanking = require('./routes/ranking');


app.use(morgan('dev'))
//body-parser
app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());


app.use('/login' , rotaLogin);
app.use('/cadastro' , rotaCadastro);
app.use('/home', rotaHome);
app.use('/ranking', rotaRanking);



//quando não encontra rota ele aparecece esse erro
app.use((req, res, next) =>{
    const erro = new Error('Não encontrado')
    erro.status = 404;
    next(erro);
})




module.exports = app;