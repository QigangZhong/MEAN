var express=require('express');
var app=new express();

/*//这个middleware的作用是记录请求url
app.use(function (request,response,next) {
   console.log('request url: '+request.url);
   next();
});

//不带next参数，执行到这个middleware的时候就终止了
app.use(function (request,response) {
   response.writeHead(200,{'Content-Type':'text/plain'});
   response.end('hello , response ends here...');
});*/

//也可以指定只有在访问某个路径的时候才执行该middleware
app.use('/hw',function(req,res){
    res.send('hello world...');
});

app.listen(8888);
console.log('server started...');