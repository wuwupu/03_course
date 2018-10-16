var express = require('express');
var app = express();
app.listen(4000);


app.get('/',function(req,res){
  // 返回一个登录的页面
  res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
  res.end('<form action="/tijiao">'+
          'username:<input type="text" name="username">'+
          'password:<input type="text" name="password">'+
          '<input type="submit" value="SUBMIT">'+
          '</form>');
});

//处理点submit请求
app.get('/tijiao',function(req,res){
  // 获取参数
  var username = req.query.username;
  var password = req.query.password;
  // 判断参数对不对
  if(username=="zhangsan" && password=="123"){
    //用户密码正确
    // 跳转到登录成功页面之前,先保存登录状态
    res.cookie('username',username,{maxAge:10000});
    res.send('登录成功');
  }else{
    res.send('用户名或密码错误');
  }
});

