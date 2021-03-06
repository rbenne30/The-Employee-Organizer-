require('dotenv').config();
const mysql = require('mysql2/promise');

const db = mysql.createConnection(
    {
        host:'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
)

db.connect(err=>{if(err)throw err});

module.exports = db;