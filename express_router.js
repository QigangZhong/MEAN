var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require("fs");
var multer  = require('multer');


app.use(multer({ dest: '/tmp/'}).array('image'));

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//将静态文件路径设置为content
//访问http://127.0.0.1:8081/images/logo.png即可获取静态文件/content/images/logo.png
app.use(express.static('content'));

 
//  主页输出 "Hello World"
app.get('/', function (req, res) {
   console.log("主页 GET 请求");
   res.send('Hello GET');
})

// http://127.0.0.1:8081/index.htm
app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})

//访问 http://127.0.0.1:8081/process_get?first_name=qigang&last_name=zhong
app.get('/process_get', function (req, res) {
 
   // 输出 JSON 格式
   response = {
       first_name:req.query.first_name,
       last_name:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})
 
//  POST 请求
app.post('/', function (req, res) {
   console.log("主页 POST 请求");
   res.send('Hello POST');
})

//访问 http://127.0.0.1:8081/process_post  post内容:first_name=qigang&last_name=zhong
app.post('/process_post', urlencodedParser, function (req, res) {
 
   // 输出 JSON 格式
   response = {
       first_name:req.body.first_name,
       last_name:req.body.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})
 
//  /del_user 页面响应
app.get('/del_user', function (req, res) {
   console.log("/del_user 响应 DELETE 请求");
   res.send('删除页面');
})
 
//  /list_user 页面 GET 请求
app.get('/list_user', function (req, res) {
   console.log("/list_user GET 请求");
   res.send('用户列表页面');
})
 
// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function(req, res) {   
   console.log("/ab*cd GET 请求");
   res.send('正则匹配');
})


//文件上传
app.post('/file_upload', function (req, res) {
 
   console.log(req.files[0]);  // 上传的文件信息
 
   var des_file = __dirname + "/" + req.files[0].originalname;
   fs.readFile( req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
         if( err ){
              console.log( err );
         }else{
               response = {
                   message:'File uploaded successfully', 
                   filename:req.files[0].originalname
              };
          }
          console.log( response );
          res.end( JSON.stringify( response ) );
       });
   });
})


/*
文件上传前端页面:
<html>
<head>
<title>文件上传表单</title>
</head>
<body>
<h3>文件上传：</h3>
选择一个文件上传: <br />
<form action="http://127.0.0.1:8081/file_upload" method="post" enctype="multipart/form-data">
<input type="file" name="image" size="50" />
<br />
<input type="submit" value="上传文件" />
</form>
</body>
</html>
*/


 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})