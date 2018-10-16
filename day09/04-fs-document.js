var fs = requier("fs");

fs.wirteFile("./1.txt","aaa",function(err){
    if(err){
        console.log(err);

    }else{
        console.log("写入成功!");
    }
})