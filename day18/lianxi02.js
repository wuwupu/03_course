var  express = require('express');
var  session = require('express-session');
var  app = express();

app.listen(4000);

app.use(session({
    secret:'keyboard cat',
    resave:false,
    saveUninitialized:true,
    coookie:{maxAge:356*24*360*60*1000}
}));

app.get('/',function(req,res){
    if(req.session.username){
        res.send('欢迎你'+req.session.username);
    }else{
        res.render('login.ejs');
    }
});
app.get('/login',function(req,res){
    var username = req.query.username;
    var userpass = req.query.userpass;
    //判断用户名密码是否正确
    if(username=="Jin"&&userpass=="1111234"){
        // 登陆成功
        // 保存登录信息
        req.session.username=username;
        // 跳转页面
        res.send('欢迎你，'+req.session.username+'<a href="/logout">退出登录</a>');
    }else{
        res.send('用户名或密码错误！');
    }
});

//处理/logout请求，退出登录
app.get('/logout',function(req,res){
    //删除session
    req.session.destroy(function(err){
        if(err){
            res.send('退出失败！');
        }else{
            // res.send("退出成功！");
            res.send('/');
        }
    })
})
