var http = require("http");
var fs = require('fs');
var url = require('url')
var server = http.createServer(function(req,res){
    if(req.url == '/favicon.ico'){
        return;
    }
    var pathname=url.parse(req.url).pathname;
    if(req.url=="/"){
        fs.readFile('./project/index.html',function(err,data){
            
        })
    }
});
server.listen(4000,"127.0.0.1");