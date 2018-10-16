var  express=require('express');
var  app=express();
app.listen(4000);

//设置是土木不安
app.set('view engine','ejs');
//设置跟目录
app.use(express.static('./public'));

app.get('/',function(req,res){
    res.render('02-static.ejs');
});