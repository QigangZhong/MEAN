var mysql=require('mysql');
var pool=mysql.createPool({
    host:'192.168.77.130',
    port:'3306',
    user:'root',
    password:'root',
    database:'nodejs'
});

pool.query('select * from user',function (err,rows,fields) {
   if(err) throw err;

    for(var i=0;i<rows.length;i++){
        console.log('username:'+rows[i].username);
    }
});

pool.getConnection(function (err,connection) {
    connection.query('select * from user',function (err,rows,fields) {
        if(err) throw err;

        for(var i=0;i<rows.length;i++){
            console.log('username:'+rows[i].username);
        }
    });

    connection.query('select * from user',function (err,rows,fields) {
        if(err) throw err;

        for(var i=0;i<rows.length;i++){
            console.log('username:'+rows[i].username);
        }
    });

    connection.release();
})