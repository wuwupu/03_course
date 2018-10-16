function showIndex(req,res){
    res.write(req.url);
    res.end("这是首页");
};
function showInfo(req,res){
    res.write(req.url);
    res.end("这是信息页！");
};
function showError(req,res){  
    res.write(req.url);
    res.end("这是错误页面！");
};

exprots.showIndex=showIndex;
exprots.showInfo=showInfo;
exprots.showError=showError;

