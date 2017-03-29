var express=require('express');
var app=new express();

//设置静态文件访问目录
app.use(express.static(__dirname+'/public'));

//设置路由
app.get('/',function(req,res){
    res.send('hello world...');
});
app.get('/customer',function (req,res) {
    res.send('customer page');
});
//发送静态文件
app.get('/index',function (req,res) {
   res.sendfile('./public/index.htm');
});
//把路由单独放到一个独立的js文件中管理
require('./routers')(app);

app.listen(8888);
console.log('server started...');

