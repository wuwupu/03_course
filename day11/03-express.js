//1.引入express模块
var express = require('express');
//创建app对象
var app = express();
//监听端口
app.listen(4000);

// 设置视图模板引擎
// 默认引擎是jade，但是jade语法不习惯
app.set("view engine","ejs");

//展示
app.get('/show',function(req,res){

    var data = {msg:"来自副武器的信息！"};

    res.render('03',data);
})

//处理具体的请求
app.get('/',function(req,res){
    res.end('massage from app');
})
app.get('/a',function(req,res){
    res.end('处理了/a请求');
});
app.get('/b',function(req,res){
    res.send('处理了/b请求');
});