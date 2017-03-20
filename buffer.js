var buf = new Buffer(256);
var len = buf.write('helloworld');
console.log('写入的字节数:' + len);
console.log('读取前10个字节:'+buf.toString('utf8',0,10));

var buf1=new Buffer('hello ');
var buf2=new Buffer(' world');
var buf3=Buffer.concat([buf1,buf2]);
console.log('合并后的内容:'+buf3.toString());