var mysql=require('mysql');
var db_config={
    host:'192.168.77.130',
    port:'3306',
    user:'root',
    password:'root',
    database:'nodejs'
};

var connection;
function handleDisconnect() {
    connection = mysql.createConnection(db_config);
    connection.connect(function(err) {
        if(err) {
            console.log("进行断线重连：" + new Date());
            setTimeout(handleDisconnect, 2000);   //连接不上的时候2秒重连一次
            return;
        }
        console.log("连接成功");
    });
    connection.on('error', function(err) {
        console.log('db error', err);
        //连接断开的时候重新尝试连接
        if(err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleDisconnect();
        } else {
            throw err;
        }
    });
}
handleDisconnect();

connection.end();