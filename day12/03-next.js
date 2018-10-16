var  rxpress = require('express');
var  app = express();
app.listen(4000);

// app.get('/',function(req,res,next){
//     if(req.url=='/a'){
//             //当请求路径为/a是不处理，唐后面呢的路由处理
//         next();
//     }else{
//         res,send('get/请求');
//     }
    
// });
// 参数的传递与获取，与ng路由相似
//：后面会当成参数的属性，获取时，同各国req来获取
//担忧擦承诺书数，请求路径不笃定，劲量将景区匹配的路径卸载鞋面
//模糊匹配卸载下面
app.get('/a/:id',function(req,res){
    var id= req.params.id
    res.send('get/a请求'+id);

});
// 使用正则匹配
app.get(/^\/[a-z]{3}\/[1-9]{3}$/,function(req,res){
    res.send('符合规范');   
})

app.get('/a/123',function(req,res){
    var id= req.params.id
    res.send('get/a的学校是123');

})
