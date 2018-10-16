//应用a.js文件
require("./a.js");

//调用属性
console.log("module中调用a.js的属性："+a.a);
console.log("module中调用a.js的属性：");

require("./b.js");

