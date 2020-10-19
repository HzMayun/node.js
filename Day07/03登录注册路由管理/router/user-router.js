const express = reqiure("express");
const router = new express.Router();

//引入数据库操作的内容
//引入mongoose模块
const mongoose = require("mongoose");
//引入数据约束模块
const UserInfonSchema = require("../userInfo");
//创建集合引用
const userInfo = mongoose.model("userInfo", UserInfoSchema);

//注册服务
const app = express();

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

module.exports = router;
