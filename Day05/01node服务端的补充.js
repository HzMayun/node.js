const http = require("http");
//querystring库可以处理 查询字符串 为对象
const qs = require("querystring");


// 创建服务
const server = http.createServer((request, response) => {
    // 处理favicon请求 //小团标请求
    if (request.url === './favicon,ico') return response.end();

    if(request.url==='/'){ //当查询字符串为空（ / ）的时候,
        console.log(123);
        response.setHeader("Content-Type", "text/plain;charset=utf-8")
        return response.end("<h1>湖人总冠军</h1>");
    }


    // 得到请求地址 
    console.log(request.url);
    // 得到请求方式
    console.log(request.method);


    // 获取用户get请求发送过来的数据
    const resulte = request.url.split("?")[1].split("&").reduce((p, c) => {
        const [key, value] = c.split("=");
        p[key] = value;
        return p;
    }, {})
    console.log(resulte);

    //设置响应头
    response.setHeader("Content-type", "text/plain;charset=utf-8");
    //返回响应
    response.end("你好你好你好你好！！！")
})

const port = 3000;
const 
host = "localhost";
server.listen(port, host, (err) => {
    if (err) {
        console.log(err);
        return
    }
    console.log(`服务器启动成功！请访问：http://${host}:${port}`);
})