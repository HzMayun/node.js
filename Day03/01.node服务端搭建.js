const http = require('http');

//创建一个服务
//creatServer的回调函数的形参分别是request 和 response ，代表 请求响应
const server = http.createServer((request, response) => {

    //在返回响应之前，需要设置响应头中的数据格式
    response.setHeader('Content-Type', "text/html;charset=utf-8");
    
    //返回响应
    response.end('<h1>像一个憨批憨批，随风飘摇</h1>')

})


//启动服务 使用listen方法，三个参数：端口号 、主机地址/域名地址、回调函数
//本地的主机地址 ： localhost\127.0.0.1,或是局域网地址，或是服务器地址
const port = 3000;
const host = "127.0.0.1";
server.listen(port, host, (err) => {
    if (err) {
        console.log('服务器启动失败' + err);
        return;
    }
    console.log(`服务器启动成功：请访问 http://${host}:${port}`);
})