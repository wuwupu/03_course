var http = require('http');
var fs = require('fs');
var ejs = require('ejs');
var server = http.createServer(function (req, res) {
    if (req.url == '/favicon.ico') {
        return;
    }

    fs.readFile('./02-ejs-3.html',function(err,data){
        if(err){
            console.log(err);
            res.end('页面加载出错');

        }
        var info = {msg:"崽子服务器的信息"};
        
        var html = ejs. render(data.toString(),info);
        //没有出去返回数据
        res.end(data);
    })
});
server.listen(4000, '127.0.0.1');