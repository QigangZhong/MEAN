var orm=require('orm');

orm.connect('mysql://root:root@192.168.77.130:3306/nodejs',function (err,db) {
    if(err) throw err;

    var User=db.define('user',{
        id:Number,
        name:String,
        birthday:Date,
        username:String,
        password:String
    });

    User.find({},function (err,items) {
       for(var i=0;i<items.length;i++){
           console.log('username:'+items[i].username);
       }
    });
});