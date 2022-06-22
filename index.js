(async () => {

    const database = require('./dbsequelize');
    const Usuario = require('./usuario');
    await database.sync();

})