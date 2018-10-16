var gm = require('gm');

gm('./1.jpg')
// .flip()//翻转
// .magnify()//扩大一倍尺寸
// .rotate('green', 45)//，填充色，旋转多少啊度
// .blur(7, 3)//近视眼效果
// .crop(300, 300, 150, 130)//剪切图片(宽,高,x轴,y轴)
// .edge(3)//
// .drawCicle(100,100,90,90);//圆心坐标x,y，偏离圆心坐标x0,y0
.write('./2.jpg', function (err) {
  if (!err) console.log('crazytown has arrived');
});

