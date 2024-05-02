// Memuat modul Express.js
const express = require('express');
const app = express(); // Membuat instance aplikasi Express
const port = 3002; // Menetapkan port server
const response = require('./request.js')

// Memuat modul body-parser untuk parsing body dari request HTTP
const bodyParser = require('body-parser');

//pemanggilam file config.js di indexs.js
const db = require('./config.js');
const { error } = require('console');

// Menggunakan body-parser untuk meng-parse body dari request dalam format JSON
app.use(bodyParser.json())

//tambahkan route get data 
app.get('/customers', (req,res)=>{
    db.query('SELECT * FROM customers',(error,result)=>{
        console.log(result)
        res.send(result)
    })
})

app.get('/products', (req,res)=>{
    db.query('SELECT * FROM products',(error,result)=>{
        console.log(result)
        res.send(result)
    })
})

app.get('/sales', (req,res)=>{
    db.query('SELECT * FROM sales',(error,result)=>{
        console.log(result)
        res.send(result)
    })
})
// Endpoint untuk menangani HTTP POST request ke /data
app.post('/data', (req, res) => {
    // Logging body dari request
    console.log({ RequestFromOutside: req.body });
    // Mengirimkan respons 'login berhasil' kembali ke client
    res.send('login berhasil');
});
// Memulai server Express untuk mendengarkan pada port yang ditetapkan
app.listen(port, () => {
    // Logging bahwa server telah dimulai dan mendengarkan pada port tertentu
    console.log(`Running in port ${port}`)
});