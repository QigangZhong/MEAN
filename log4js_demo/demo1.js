/*
//1. 简单示例
// file: simplest.js
var log4js = require('log4js');
var logger = log4js.getLogger();
logger.debug("Time:", new Date());*/

/*//2. 日志分类
// file: set-catetory.js
var log4js = require('log4js');
var logger = log4js.getLogger('set-catetory.js');
logger.debug("Time:", new Date());*/

/*//3. 写入文件
// file: custom-appender.js
var log4js = require('log4js');
log4js.configure({
  appenders: [{
    type: 'file',
    filename: 'default.log'
  }]
})
var logger = log4js.getLogger('custom-appender');
logger.debug("Time:", new Date());*/


/*//4. 过滤级别
// file: level-and-category.js
var log4js = require('log4js');
log4js.configure({
  appenders: [{
    type: 'logLevelFilter',
    level: 'DEBUG',
    category: 'category1',
    appender: {
      type: 'file',
      filename: 'default.log'
    }
  }]
})
var logger1 = log4js.getLogger('category1');
var logger2 = log4js.getLogger('category2');
logger1.debug("Time:", new Date());
logger1.trace("Time:", new Date());
logger2.debug("Time:", new Date());*/


/*//5. layout
// file: layout-pattern.js
//日志格式说明: https://github.com/nomiddlename/log4js-node/wiki/Layouts
var log4js = require('log4js');
log4js.configure({
  appenders: [{
    type: 'console',
    layout: {
      type: 'pattern',
      pattern: '[%r] [%[%5.5p%]] - %m%n'
    }
  }]
})
var logger = log4js.getLogger('layout-pattern');
logger.debug("Time:", new Date());*/


//6. 实际用例
// file: server.js
var log4js = require('log4js');
var express = require('express');

log4js.configure({
 appenders: [{
   type: 'DateFile',
   filename: 'access.log',
   pattern: '-yyyy-MM-dd.log',
   alwaysIncludePattern: true,
   category: 'access'
 }]
});

var app = express();
app.use(log4js.connectLogger(log4js.getLogger('access'), { level: log4js.levels.INFO }));
app.get('/', function(req,res) {
  res.send('前端外刊评论');
});
app.listen(5000);