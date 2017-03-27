var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/foobar';

/*
//1. 插入数据
var insertData = function (db, callback) {
    //连接到表 site
    var collection = db.collection('persons');
    //插入数据
    var data = [{"name": "jack", "age": 20}, {"name": "john", "age": 21}];
    collection.insert(data, function (err, result) {
        if (err) {
            console.log('Error:' + err);
            return;
        }
        callback(result);
    });
}

MongoClient.connect(DB_CONN_STR, function (err, db) {
    console.log("连接成功！");
    insertData(db, function (result) {
        console.log(result);
        db.close();
    });
});*/

/*//2. 查询数据
var selectData = function(db, callback) {
    //连接到表
    var collection = db.collection('persons');
    //查询数据
    var whereStr = {"name":'jack'};
    collection.find(whereStr).toArray(function(err, result) {
        if(err)
        {
            console.log('Error:'+ err);
            return;
        }
        callback(result);
    });
}

MongoClient.connect(DB_CONN_STR, function(err, db) {
    console.log("连接成功！");
    selectData(db, function(result) {
        console.log(result);
        db.close();
    });
});*/

/*//3.修改数据
var updateData = function(db, callback) {
    //连接到表
    var collection = db.collection('persons');
    //更新数据
    var whereStr = {"name":'jack'};
    var updateStr = {$set: { "age" : 30 }};
    collection.update(whereStr,updateStr, function(err, result) {
        if(err)
        {
            console.log('Error:'+ err);
            return;
        }
        callback(result);
    });
}

MongoClient.connect(DB_CONN_STR, function(err, db) {
    console.log("连接成功！");
    updateData(db, function(result) {
        console.log(result);
        db.close();
    });
});*/


//4. 删除数据
var delData = function(db, callback) {
    //连接到表
    var collection = db.collection('persons');
    //删除数据
    var whereStr = {"name":'jack'};
    collection.remove(whereStr, function(err, result) {
        if(err)
        {
            console.log('Error:'+ err);
            return;
        }
        callback(result);
    });
};

MongoClient.connect(DB_CONN_STR, function(err, db) {
    console.log("连接成功！");
    delData(db, function(result) {
        console.log(result);
        db.close();
    });
});