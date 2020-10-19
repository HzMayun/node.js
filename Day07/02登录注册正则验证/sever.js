const express = require("express")
const {
    resolve
} = require("path");

const mongoose = require("mongoose")

require("./db")//连接数据库模块


const UserInfoSchema = require("./userInfo")//连接数据库约束模块

//创建集合引用
const userInfo = mongoose.model("userInfo", UserInfoSchema);
//注册服务
const app = express();

//静态导入
app.use(express.static("./public"))

//中间件:处理post请求
app.use(express.urlencoded({
    extended: true
}))
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


// 注册接口
app.post("/register", async (req, res) => {
    // 1 获取用户数据
    const {
        user,
        pass
    } = req.body;
    console.log(req.body);
    console.log(user, pass);
    // 2 判断是否已经注册
    //find 返回的是一个数组，findOne返回的时查找的对象
    //find 查找不到返回空数组，findOne找不到返回null
    const isHasUser = await userInfo.findOne({ user })
    console.log(isHasUser + '1111');
    if (isHasUser) {
        if (isHasUser.user === user) {
            res.send("用户名被注册");
            return;
        }
    }

    // 3 保存在数据库
    const saveResult = await userInfo.create({
        user,
        pass
    })
    console.log(saveResult);
    //4 返回响应  注册成功后跳转 登录界面
    //    res.sendFile(resolve(__dirname,"./login.html"))
    //用重定向
    res.redirect("http://127.0.0.1:3000/login.html")
})


//登录的接口   
app.post("/login", async (req, res) => {
    const {
        user,
        pass
    } = req.body;

    const isHasUser = await userInfo.findOne({
        user
    })
    console.log(isHasUser);
    if (!isHasUser) return res.send("用户名不存在")

    if (isHasUser.pass === pass) {
        res.send("登陆成功")
    } else {
        res.send("密码错误")
    }
})


// 启动服务
app.listen(3000, (err) => {
    if (err) {
        console.log('服务器启动错误' + err);
        return;
    }
    console.log("服务器启动成功，请访问：http://127.0.0.1:3000");
})


