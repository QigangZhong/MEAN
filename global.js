//1. 全局变量
console.log(__filename);

console.log(__dirname);

//2. 全局函数
/*setTimeout(function(){
	console.log('after 3s...');
}, 2000);*/

/*var timer = setTimeout(function(){
	console.log('after 3s...');
}, 2000);

clearTimeout(timer);*/

function printHello(){
   console.log( "Hello, World!");
}
// 两秒后执行以上函数
setInterval(printHello, 2000);