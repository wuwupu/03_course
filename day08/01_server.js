//1.引入http模块
var http = require("http");

//2.通过http创建服务器
var server = http.createServer(function(request,response){
    //4.编写服务器内容
    // response.end("This is my first NodeJs Page!");
    //如果要使用中文，需要先设置
    response.writeHead(200,{"Content_Type":"text/html;charset=utf-8"});
    re
});

//3.开启服务，监听端口
server.listen(4000,"localhost");