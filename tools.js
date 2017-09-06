//generate uuid
var uuid = require('node-uuid');  
console.log(uuid.v1().replace(/-/g,''));
console.log(uuid.v4())


//base64 encode
console.log(new Buffer("samsung_logistics:aa9427c027f011e7be8e87ae61f30c20").toString('base64'));
//base64 decode
console.log(new Buffer("c2Ftc3VuZ19sb2dpc3RpY3M6YWE5NDI3YzAyN2YwMTFlN2JlOGU4N2FlNjFmMzBjMjA=", 'base64').toString('ascii'))