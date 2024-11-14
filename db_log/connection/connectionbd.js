// função responsavel por se conectar ao banco de dados local
/*const mysql = require('mysql2/promise');

const db = async () => {
    if (global.conexao && global.conexao.state !== 'disconnected')
        return global.conexao;

    // função que efetivamente cria a conexao utilizando um json como parametro
    const con = await mysql.createConnection({
        host: '',
        user: '',
        password: "",
        database: ''
    });
    
    console.log("conectou ao banco");
    global.conexao = con;
    return con;
}

// função para inserir dados na tabela de log


module.exports = db;*/// connectionbd.js
const mysql = require('mysql2');
require('dotenv').config()

// Crie uma pool de conexões
const db = mysql.createPool({
    //inserir dotenv com as propriedades abaixo
    host: process.env.host_db,
    user: process.env.user_db,
    password: process.env.password_db,
    database: process.env.database,
    port: 19320,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    connectTimeout: 10000,// 10 segundos de timeout
    charset: 'utf8mb4'
});



//aqui exporta a conexao 
module.exports = db;

