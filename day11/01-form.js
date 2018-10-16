var  http = requier('http');
var  fs = require('fs');
var   fd = require('formidable');
var sd= require('silly-datatime')
http.createServer(function(req,res){
    if(req.url=="/favicom.ico"){return;}

    if(req.url=="/"){
        fs.readFile('./01-form.html',function(err,data){
            if(err){
                console.log(err);
                res.end('页面加载失败');
                return;
            }
            //读取成功，页面加载
            res.end(data);
        })
    }else if(req.url=="/tijioao"&&req.method.toUpperCase()=="POST"){
        //POST的/tijiao请求
        //使用formidable模块处理请求
        //创建表单对象
        // var form = new fd.IncomingForm();
        var form = fd.IncomingForm();
        //上传保存路径
        var form = fd.uploadDir="./uploads"
        
        //解析请求对象
        //err,解析出错的错误信息
        //fields:解析出
        form.pass(req,function(err,fields,files){
            if(err){
                console.log(err);
                res.end('请求失败');
                return;
            }
            console.log('fields:');
            console.log(fields);
            console.log('files');
            consle.log(files);
            var  oldPath=files.pic.path;
            //设置新路径
            
            var  oldName=files.pic.name;
            var arr= oldName.split(".");
            var ext = arr[arr.length-1];
            //谁知名称
            var name = sd.format(new Data(),"YYYYMMDDHHmmss");
            //上传文件新名称
            var newName = name + "." + ext;
            //新路径
            var newPath='./uploads/'+newName;
            fs.rename(oldPath.newPath,function(err){
                if(err){
                    console.log(err);
                    res.end('重命名失败');
                    return;
                }
            })

            res.end("请求成功");
        })        
    }else{
        res.end("地址错误");
    }



}).listen(4000,'localhost');