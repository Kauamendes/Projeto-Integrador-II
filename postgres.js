const postgres = require('postgres');


var pool = postgres.createPool({
    "user" : process.env.POSTGRES_USER, //usando variaveis de ambiente que sao definidas no arquivo nodemon.json
    "password" :  process.env.POSTGRES_PASSWORD,
    "database" : process.env.POSTGRES_DATABASE,
    "host" : process.env.POSTGRES_HOST,
    "port" : process.env.POSTGRES_PORT
})

exports.pool = pool;