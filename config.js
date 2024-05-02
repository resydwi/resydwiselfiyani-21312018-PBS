//request library mysql
const mysql = require('mysql')

//variabel koneksi untuk database
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'penjualan_tv'
})

//kirimkan variabel keluar untuk digunakan diluar file
module.exports = db