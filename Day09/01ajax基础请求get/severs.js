const express = require("express");

const app = express();

app.use(express.static("./public"));

app.get("/userinfo", (req, res) => {
    console.log(req.query);//得到请求体
    //响应一个json数据
    res.json({
        "name":"小王",
        "age":18
    })
})

//启动服务
app.listen(3000,(err)=>{
    if(err){
        console.log(err);
    }
    console.log("请访问：http://127.0.0.1:3000");
})