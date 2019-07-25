const express=require('express');
const bodyParser=require('body-parser');
const userRouter=require('./routes/user.js');
var app=express();
app.listen(8080);
//使用body-parser中间件    路由和中间件无关
app.use(bodyParser.urlencoded({
  extended:false
}));
//托管静态资源到public目录
app.use( express.static('./public') );
//使用路由器，挂载到/user下
app.use('/user',userRouter);//先使用中间件，再路由