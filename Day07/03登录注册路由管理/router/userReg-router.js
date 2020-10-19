const express = require("express")
const mongoose = require("mongoose")
const router = new express.Router();
//中间件 正则验证
app.use((req, res, next) => {

    //获取当前是注册登录还是直接登录
    const isRegisterReq = req.url == "/register" ? true : false;
    const {
        user,
        pass
    } = req.body
    // console.log(user, pass);
    //正则
    const userReg = /^[A-Z]\w{2,9}$/g; //以A-Z之间的任意的一个字符开头，且总长度在3-15之间的,且以匹配的任意字符
    const passReg = /\d{3,8}/g;
    //判断
    //无论是登录还是注册请求，都要进行用户名的正则校验
    if (!userReg.test(user)) {
        return res.send("用户名必须是 大写开头字母，后面跟数字字母下划线，总长度在5-9之间");
    }
    //只有注册请求才会进行密码正则校验
    console.log(isRegisterReq);
    if (isRegisterReq && !passReg.test(pass)) {
        return res.send("密码必须是6-8位数字")
    }
    //如果校验通过，这执行狭义和路由
    next();
})

module.exports = router;