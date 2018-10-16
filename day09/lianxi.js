var http = require("http");

var server = http.createServer(function(req,res){
    if(req.url=="/favicon.ico"){
        return;
    }
    if(req.url=="/circle"){
        //讀取圓形頁面
        fs.readFile('./circle.html',function(err,data){
            if(err){
                res.end("读取页面出错");
            }else{//读取整出数据，返回数据
                res.end(data);
            }
        })
    }
    if(req.url=="/square"){
        //讀取方形頁面
        fs.readFile('./square.html',function(err,data){
            if(err){
                res.end("读取页面出错");
                return;
            }
            res.end(data);
        })
    }else{
        res.end("地址错误！");
    }

    
})
server.listen(4000,"127.0.0.1");