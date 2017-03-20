/*var events = require('events');
var event = new events.EventEmitter();

event.on('someevent',function(){
	console.log('some event 触发了');
});

setTimeout(function(){
	event.emit('someevent');
}, 3000);*/

var events=require('events');
var ee=new events.EventEmitter();
ee.on('connect',function(){
	console.log('链接成功...');

	ee.emit('data_received');
});

//on=addListener
ee.addListener('data_received',function(){
	console.log('数据接收成功');
});

//为connect再次添加一个执行方法
ee.on('connect',function(){
	console.log('我是connect2...');
});


//为connect添加第三个方法
var connect3=function(){
	console.log('我是connect3...');
};
ee.addListener('connect',connect3);

//移除第三个方法
ee.removeListener('connect',connect3);

var listenerCount = require('events').EventEmitter.listenerCount(ee, 'connect');
console.log("connect这个名称的监听器数量是:" + listenerCount);

//触发connect事件
ee.emit('connect');

console.log('执行完毕');