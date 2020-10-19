const http = require("http");
const fs = require("fs");
const path = require("path");

//创建一个服务
const sever = http.createServer((request,respose)=>{
    const filePath = path.resolve(__dirname,"./01.jpg");
    const rs = fs.createReadStream(filePath);
    //在返回相应的资源之前，需要设置
    respose.setHeader("Content-Type","image/jpeg;charset=utf-8")
    //返回响应
    rs.pipe(respose)
})

//启动服务
const port = 3000;
const host = "localhost";
sever.listen(port,host,(err)=>{
    if(err){
        console.log("服务器启动失败"+err);
        return;
    }
    console.log(`服务器启动成功，请访问：http://${host}:${port}`);
})