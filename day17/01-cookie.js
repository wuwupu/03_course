var   express = require('express');
var  app = express();
app.listen(4000);


//访问/请求，服务器生成cookie发送水果歌浏览器
// 浏览器啊保存cookie
app.get('/',function(req,res){
    // 设置cookie
    // 属性名为usernane，值为Jim Green
    res.cookie('username','Jim Green');
    // 可以设置多个cookie,但是属性名不能一样
    res.cookie('age',23);
    res.cookie('usex','M');
    // 如果属性名一致，后设置的值会覆盖前面的值
    res.cookie('username','zhangsan');

    res.send("访问/请求！");
})