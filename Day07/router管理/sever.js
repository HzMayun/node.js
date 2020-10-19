const express = require("express")
const router = require("./router")

const app = express();

//使用中间件 把路由挂载到app上
app.use(router); //这个router是一函数

app.listen(4000,(err)=>{
    if (err) {
        console.log("服务器启动错误" + err);
        return;
    }
    console.log("服务器启动成功 http://127.0.0.1:4000")
})