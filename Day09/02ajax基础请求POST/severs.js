const express = require("express");

const app = express();

app.use(express.static("./public"));

//挂载
app.use(express.urlencoded({extended:true}))
//挂载JSON
app.use(express.json())



app.get("/userinfo", (req, res) => {
    console.log(req.query);//得到请求体
    //响应一个json数据
    res.json({
        "name":"小王",
        "age":18
    })
})


app.post("/userinfo", (req, res) => {
    console.log(req.body);//得到请求体
    //响应一个json数据
    res.json({
        "name":"老张",
        "age":99
    })
})



//启动服务
app.listen(3000,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("请访问：http://127.0.0.1:3000");
})