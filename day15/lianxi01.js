var mongoClient = require('mongodb').MongoClient;

var url = "mongodb://127.0.0.1:27017";

//练习数据库
mongoClient.connect(url,{useNewUrlParser:true},function(err,client){
  if(err){
    console.log(err);
  }else{
    //获取数据库,集合
    var coll = client.db('web1807').collection('student');
    // 修改数据
    /* coll.updateMany({id:101},{$set:{age:33}},function(err,result){
      if(err){
        console.log(err);
      }else{
        console.log('修改成功');
      }
      client.close();
    }) */

    //查询数据
    coll.find({}).toArray(function(err,docs){
      if(err){
        console.log(err);
      }else{
        console.log(docs);
      }
      client.close();
    })
  }
})

