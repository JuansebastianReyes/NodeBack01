const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const mySqlPool = require('./config/db');

dotenv.config()

const app = express()

app.use(express.json());
app.use(morgan('dev'));


app.get('/test', (req,res)=>{
    res.status(200).send('<h1>Nodejs Mysql APP</h1>')
});

const PORT = process.env.PORT || 8000;

mySqlPool.query('SELECT 1').then(() => {
    console.log("MySQL Connect".bgCyan.white);

    app.listen(PORT, () => {
        console.log(`Server runing on port ${process.env.PORT}`.bgMagenta.white)
    });
}).catch(error => console.log(error));

