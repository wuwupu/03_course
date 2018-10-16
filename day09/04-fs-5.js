var  fs = require('fs');

fs.stats('./day09.txt',function(err,stats){
    if(err){
        console.log(err);
    }else{
        console.log(stats.isFile());
    }
});