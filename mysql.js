<<<<<<< HEAD
const mysql = require('mysql2');


var pool = mysql.createPool({
    "user" : process.env.MYSQL_USER, //usando variaveis de ambiente que sao definidas no arquivo nodemon.json
    "password" :  process.env.MYSQL_PASSWORD,
    "database" : process.env.MYSQL_DATABASE,
    "host" : process.env.MYSQL_HOST,
    "port" : process.env.MYSQL_PORT
})

=======
const mysql = require('mysql2');


var pool = mysql.createPool({
    "user" : process.env.MYSQL_USER, //usando variaveis de ambiente que sao definidas no arquivo nodemon.json
    "password" :  process.env.MYSQL_PASSWORD,
    "database" : process.env.MYSQL_DATABASE,
    "host" : process.env.MYSQL_HOST,
    "port" : process.env.MYSQL_PORT
})

>>>>>>> cd039dff996dfa60743632ba8f11ae35d5514da3
exports.pool = pool;