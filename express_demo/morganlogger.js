//morgan教程
//https://yq.aliyun.com/articles/2983
var express=require('express');
var app=new express();

var logger=require('morgan');
var fs=require('fs');
var FileStreamRotator=require('file-stream-rotator');
var logDir=__dirname+'/logs';

fs.existsSync(logDir) || fs.mkdirSync(logDir)

//1. 按照日期来记录日志
var accessLogStream=FileStreamRotator.getStream({
    filename:logDir+'access-%DATE%.log',
    frequency:'daily',
    verbose:false
});

app.use(logger('combined',{stream:accessLogStream}));

//2. 自定义的日志格式，这里为了测试只输出到console
app.use(logger('This is a customer format. :method :url :status :response-time ms'));

app.listen(8080);
console.log('server started...');