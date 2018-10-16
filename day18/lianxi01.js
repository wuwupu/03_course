var  express = require ('express');
var  cookieParser = require('cookie-parser');
var  app = express();

app.listen(4000);
//设置cookie解析方式
app.use(cookieParser());

app.get('/',function(req,res){
    //查询cookie中是否有登录信息
    var cookie = req.cookies;
    //判断cookie中有没有登录的信息（登录的用户名
    if(cookie.username==true){
        //说明已经登录了
        res.send("欢迎你："+cookie.username);
    }else{
        //cookies.name为false,说明没有值，没有登录
        res.render('login.ejs');

    }
});

app.get('/login',function(req,res){
    var username = req.query.username;
    var userpass = req.query.userpass;
    
    if(username=="Jin"&&userpass=="1111234"){
        

        res.cookie('username',username,{maxAge:20000});

        res.send('欢迎你:'+username);
    }else{
        res.send('用户或密码错误');
    }
})



