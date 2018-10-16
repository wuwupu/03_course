//1
var ejs = require('ejs');
//2 创建模板
var str = '这是一个数组：<%= names%>';
//3 模拟数据
var data = {names:['jack','rose','lily']};
var stus={stus:[
    {name:'zs'},
    {name:'wangwu'},
    {name:'lisi'}

]};
//填充
var html = ejs.render(str,data);


console.log(html);