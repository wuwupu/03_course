// 使用express狂阶创建服务器
var express=require('express');
var  app=express();
app.listen(4000);

//设置视图模板引擎
app.set('view engine','ejs');

app.get('/a',function(req,res){
    //处理请求忽略大小写
    // 忽略参数
    // res.send('服务器返回的数据');
    //模拟数据
    var data = {stus:[
        {id:1,name:'zs',sex:'m',age='23'},
        {id:2,name:'zs',sex:'m',age='23'},
        {id:3,name:'zs',sex:'m',age='23'},
        {id:4,name:'zs',sex:'m',age='23'},
    ]}
    res.render('01-temlpate');
});