var fs = require('fs');

fs.readdir('./a',function(err,files){
    if(err){
        console.log(err);
        return;

    }
    //读取成功
    console.log(files);
    // for (var i=0;i<files.length;i++){
    //     console.log(files[i]);
    //     fs.stat('./a/'+files[i],function(err,stats){
    //         // console.log(err);
    //         if(stats.isFile()){
    //             console.log(files[i]+"是文件");
    //         }else{
    //             console.log(files[i]+"是文件夹");
    //         }
    //     })
    // }
    
//递归
    (function a(i){
        //先判定递归结束的条件
        if(i==files.length){//当i体育时更要注意长度一样，说明便利结束了
            return；

        }
        //遍历没有结束，检查判断每一个元素的转台
        fs.stat('./a/'+files[i],function(err,stats){
            if(err){
                console.log(err);
                return;
            }if(stats.isFile()){
                console.log(files[i]+"是一个文件");
            }else{
                console.log(files[i]+"是一个文件夹");
            }
            a(++i);//自调
        });
    })(0)




})

