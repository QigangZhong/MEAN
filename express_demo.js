/*
执行之前需要添加以下module:
$ npm install express --save
$ npm install body-parser --save
$ npm install cookie-parser --save
$ npm install multer --save
*/

var express = require('express');
var cookieParser = require('cookie-parser');//使用cookie


var app = express();
app.use(cookieParser());
 
app.get('/', function (req, res) {
	console.log('Cookies: ',req.cookies);
   res.send('Hello World');
})
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
});