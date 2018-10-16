var http = require('http');
var fs = require('fs');
var    = require('queryString');
var server = http.createServer(function (req, res) {
    if (req.url == '/favicon.ico') {
        return;
    }
    //loaclhost:4000打开form表单页面
    if(req.url=="/"){
        fs.readFile('./05_form.html',function(err,data){
            if(err){
                console.log(err);
                res.end("页面加载失败");
                return;
            }
            //读取成功，将读取到的数据家在现实在页面时
            res.end(data);
        })
    }
    if(req.url=="./tijiao"&&req.method=="post"){
        //因为nodejs是单线程非I/O阻塞，为了追求效率，数据是一小段一小段的上传
        //这样就会产生两种状态：正在接受，接受完成
        //提前声明一个变量，用于保障每一次的得到的一小段的数据
        var allData = "";
        //data表示赈灾接收数据的状态
        //chunk表示每次接收到的一小段的数据
        //addlisten方法和on方法功能一样
        req.on('data',function(chunk){
            //凭借每次得到的小段数据
            allDaata +=chunk;
        });
        //end：表示数据接受完成的状态，当数据全部接收完毕，进入该状态
        req.add;isten('end',function(){
            //进入接受完成状态，说明数据接收完毕
            console.log(allData);
            //将字符创的参数，通过queryString模块转换为对象类型
            var obj=qs.parse(allDate);
            console.log(obj);
            res.end()//返回响应
        });
    }
});
server.listen(4000, '127.0.0.1');