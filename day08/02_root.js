var http = require("http");
//引入fs模块
var fs=require("fs");
var server=http.createServer(function(request,res){
    /* 
        因为NodeJs没有更怒路，所以就无法通过loaclhost：4000/02_root.html来访问该文件中的内容可以使用fs模块来实现这个功能
    */
   //使用fs来读取02_root.html的内容，并将读取到数据作为相应内容，返回给页面
   fs.readFile("./02_root.html",function(err,data){
        if(err){
            console.log(err);//答应错误信息
            res.end("read find error!");
        }else{
            //读取文件成功
            console.log(data.toString());//查看data
            res.end(data);//返回读取的数据
        }
   });
});

server.listen(4000,"localhost");