/*CREATE TABLE `user` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(45) DEFAULT NULL,
    `birthday` date DEFAULT NULL,
    `username` varchar(45) DEFAULT NULL,
    `password` varchar(45) DEFAULT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;*/

var mysql=require('mysql');
var connection=mysql.createConnection({
    host:'192.168.77.130',
    port:'3306',
    user:'root',
    password:'root',
    database:'nodejs'
});

connection.connect(function (err) {
    if(err){
        console.log('open connection error:'+err);
    }
    console.log('database connected...');
});

/*//1. 插入
var insertSql='insert into user(name,birthday,username,password) values(?,?,?,?)';
var insertParams=['jack','1988-09-01 09:09:09','jack','jack'];
connection.query(insertSql,insertParams,function (err,result) {
    if(err){
        console.log('insert error:'+err);
        return;
    }

    console.log('insert id:'+result.insertId);
});*/

//2. 查询
var queryParams=['jack'];
connection.query('select * from user where name=?',queryParams, function(err,rows,fields){
    if(err) throw err;
    for(var i=0;i<rows.length;i++){
        console.log('username:'+rows[i].username);
    }
});

//3. 修改
var updateParams=['john','jack'];
connection.query('update user set name=? where name=?',updateParams, function(err,result){
    if(err) throw err;

    console.log('update affected rows:'+result.affectedRows);
});

//4. 删除
var updateParams=['john'];
connection.query('delete from user where name=?',updateParams, function(err,result){
    if(err) throw err;

    console.log('delete affected rows:'+result.affectedRows);
});

connection.end(function (err) {
    if(err){
        console.log('close connection error:'+err);
        return;
    }
    console.log('database closed!');
});