var  express = require('express');
var   app = express();
//引入单独提出来的方法（引入路文件）
var  route=require('./03-route.js');
app.listen(4000);

app.get('/',route.index);
//上面的写法还可以这样写
app.use(route.index);
app.get('/info',function(req,res){
    res.send('这是信息页');
});

app.get('/error',function(req,res){
    res.send('这是错误页');
});
