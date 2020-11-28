const mysql = require('mysql');

const pool = mysql.createPool({
    host:'127.0.0.1',
    port:'3306',
    user:'lhh',                 // 修改为自己的账号的名字
    password:'',                // 修改为自己的账号的密码
    database:'bookdb',
    connectionLimit:'20'

});

module.exports=pool;