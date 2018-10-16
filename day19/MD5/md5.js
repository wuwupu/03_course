var  crypto = require('crypto');

exports.MD5 = function(pwd){
    var str = crypto.createHash('md5').update(pwd).digest('base64');
    // 把第一次加密的得到的秘闻截取一部分
    str.substr(5,10);
    //加密街区的部分密文
    str = crypto.createHash('md5').update(str).digest('base64');
    return str ;
    
}