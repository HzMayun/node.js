const express = require("express");

const app = express();

app.use(express.static("./public"));

//获取post请求体 挂载到req上  只能处理urlencoded编码格式的请求
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.get("/userinfo", (req, res) => {
    console.log(req.query);//得到请求体
    //响应一个json数据
    res.json({
        "name": "小王",
        "age": 18
    })
})

app.post("/userinfo", (req, res) => {
    console.log(req.body);

    //响应一个json数据
    res.json({
        name: "老王",
        age: 12
    })
})

//启动服务
app.listen(3000, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("请访问：http://127.0.0.1:3000");
})