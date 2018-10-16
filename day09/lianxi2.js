var http = require('http');
var server = http.createServer(function(req,res){
    if(req.url=="/favicon.ico"){
        return;
    }if(req.url=="/lianxi2"){
        //读取form表单
        fs.readFile("./lianxi2.html",function(err,data){
            
        })
    }
    res.end();
})