var express=require('express');
//引入路由模块
var  route= require('./03-route-2-ext');
var app=express();
app.listen(4000);

app.get('/',function(req,res){
    res.send('这是app的/请求');
})

app.use('/student',route);

app.use('/teacher',); 