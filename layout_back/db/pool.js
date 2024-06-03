const Pool = require('pg').Pool;
require('dotenv').config();

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'kim573071!',
    port: '5432',
    schema: 'pubilc',
});
pool.connect(function(err){
    if(err) throw err;
    console.log('pg db connect !')
});

let tableQuerys = "SET search_path TO 'layout_info'";
pool.query(tableQuerys, function (err, rows, fields) {
    if (err) console.log(err);
    console.log("Get Schema !")
});
module.exports =pool;
