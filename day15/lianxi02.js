var express = require('express');
var bdParser = require('body-parser');
var mongoClient = require('mongodb').MongoClient;
var app = express();
app.listen(4000);

app.set('view engine','ejs');

app.use(bdParser.urlencoded({extended:true}));

app.get('/',function(req,res){
  res.render('login');
})

app.post('/login',function(req,res){
  //获取输入的参数:用户名与密码
  var name = req.body.username;
  var pwd = req.body.password;
  // json
  var json = {name:name,pwd:pwd};
  var url = "mongodb://localhost:27017";

  mongoClient.connect(url,function(err,client){
    if(err){
      console.log(err);
      res.send('服务器没有反应');
      return ;
    }
    // 连接成功
    var coll = client.db("web1807").collection("student");
    coll.find(json).toArray(function(err,docs){
      if(err){
        console.log(err);
        res.send('登录失败');
      }else{
        if(docs.length>0){
          res.send('登录成功');
        }else{
          //没有查到数据,docs长度为0
          res.send('登录失败,用户名或密码错误');
        }
      }
      client.close();
    });
  })

})






