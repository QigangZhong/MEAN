var express=require('express');
var orm=require('orm');

var app=new express();

app.use(orm.express("mysql://root:root@192.168.77.130:3306/nodejs", {
    define: function (db, models, next) {
        models.User = db.define("user", {
            id          :Number,
            name        :String,
            username    :String,
            password    :String,
            birthday    :Date
        });
        next();
    }
}));

app.get('/',function (req,res) {
    req.models.User.find({},function (err,users) {
       if(err){
           res.send(err);
       }

       res.send(JSON.stringify(users));
    });
});

app.listen(8080);
console.log('server started...');

