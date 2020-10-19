const express = require("express");

const {
    resolve
} = require("path");

//创建applicaltion对象
const app = express();
// "/:id"  接收当前规定路径的任意的请求
app.get("/", (req, res) => {
    //req.params  :拿到请求的信息
    console.log(req.params);

    //end()响应需要设置响应头，不然会导致乱码 
    //send()不用设置响应头

   /*   res.json({
         name:"Lily",
         sex:"女",
         age:12
     }); //响应一个json数据 */

    /* res.download("./package-lock.json");//响应一个下载文件，直接会把文件下载下来
    res.sendFile(resolve(__dirname,"./package-lock.json"));//下载文件 */

    res.redirect("http://baidu.com")//返回重定向
    res.status("222")

    // res.send("hello你好你好俩佛");


})

//启动服务
app.listen(3000, (err) => {
    if (err) {
        console.log("服务器启动失败" + err);
        return;
    }
    console.log("服务器启动成功 http://localhost:3000");
})