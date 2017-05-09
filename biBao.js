//http://www.cnblogs.com/wangfupeng1988/p/3994065.html

//第一，函数作为返回值
// function fn(){
// 	var max=10;
// 	return function bar(x){
// 		if(x>max){
// 			console.log(x);
// 		}
// 	}
// }

// var f1=fn();
// f1(15);

//第二，函数作为参数被传递
//自由变量取值，要去创建这个函数的作用域取值，而不是“父作用域”
// var max=10;
// var fn=function(x){
// 		if(x>max){
// 			console.log(x);
// 		}
// 	};

// (function(f){
// 	var max=100;
// 	f(15);
// })(fn);



function fn(){
	var max=10;
	return function bar(x){
		if(x>max){
			console.log(x);
		}
	}
}

var f1=fn();
var max=100;

f1(15);