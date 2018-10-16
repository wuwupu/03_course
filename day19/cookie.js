var express = require('express');
var cookie = require("cookie-parser");
var  app = express();

app.listen(4000);

app.use(cookie());

//统计用户访问该服务器的次数
app.use(function(req,res,next){
    if(req.url=="/favicon.ico"){
        return;
    }
    //从cookie中获取count值
    var count = req.cookies.count;//上一次的次数
    if(count){//判断cookie中是否包含count
        //找到数据，不是第一次访问，可以自增；
        count++;//本地访问+1
    }else{//第一次访问，cookie中没有count
        count=1;

    }
    
    //将最新的count重新保存进cookie
    res.cookie('count',count);
    res.write('you have visited this site'+count+'times\n')
    next();
})
app.get('/',function(req,res){
    res.end('index');
});
app.get('/a',function(req,res){
    res.end('aaa');
});
app.get('/b',function(req,res){
    res.end('bbb');
});

//处理所有的错误地址
app.use(function(req,res){
    //当访问地址错误时，将前面增加的一次给扣掉
    var count = req.cookie.count;
    count--;
    res.cookie('count',count);
    res.end('error');
});