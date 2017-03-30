var express=require('express');
var app=new express();

var logger=require('morgan');
var fs=require('fs');
var FileStreamRotator=require('file-stream-rotator');
var logDir=__dirname+'/logs';

fs.existsSync(logDir) || fs.mkdirSync(logDir)

//按照日期来记录日志
var accessLogStream=FileStreamRotator.getStream({
    filename:logDir+'access-%DATE%.log',
    frequency:'daily',
    verbose:false
});

app.use(logger('combined',{stream:accessLogStream}));

app.listen(8080);
console.log('server started...');