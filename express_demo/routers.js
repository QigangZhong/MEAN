//把路由放到独立的js文件中管理
module.exports=function (app) {
    app.get('/admin',function (req,res) {
        res.send('admin page');
    });
};