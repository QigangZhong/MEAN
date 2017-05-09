var uuid = require('node-uuid');  
console.log(uuid.v1().replace(/-/g,''));
console.log(uuid.v4())