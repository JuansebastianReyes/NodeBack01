const mysql = require('mysql2/promise');

const mySqlPool = mysql.createPool({
    host:'localhost',
    user: 'root',
    password: 'Js0091rg@',
    database: 'student_db'
})

module.exports = mySqlPool;