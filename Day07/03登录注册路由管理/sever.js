const { Router } = require("express")
const express = require("express")
const mongoose = require("mongoose")
const open = require("./unit/open")

require("./db")//连接数据库模块
//引入正则校验路由
const userRegRouter = require("./router/userReg-router");
//引入登录注册路由
const userRouter

//注册服务
const app = express();

//静态导入
app.use(express.static("./public"))

//中间件:处理post请求
app.use(express.urlencoded({
    extended: true
}))


// 启动服务
app.listen(3000, (err) => {
    if (err) {
        console.log('服务器启动错误' + err);
        return;
    }
    console.log("服务器启动成功，请访问：http://127.0.0.1:3000");
    open("http://127.0.0.1:3000");
})


