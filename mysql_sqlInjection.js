var mysql = require('mysql');

var pool = mysql.createPool({
    host:'192.168.77.130',
    port:'3306',
    user:'root',
    password:'root',
    database:'nodejs'
});

pool.getConnection(function(err,connection){

    connection.query('select * from user where id = ' + '1 or id = 2',function(err,result){
        //console.log(err);
        console.log(result);
    });

    connection.query('select * from user where id = ' + pool.escape('1 or id = 2') ,function(err,result){
        //console.log(err);
        console.log(result);
    });

    connection.release();
});