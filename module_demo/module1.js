var object1=function(){
	var name;
	this.setName=function(thatname){
		this.name=thatname;
	};
	this.sayHello=function(){
		console.log('Hello '+this.name);
	};
};

exports.object1=object1;