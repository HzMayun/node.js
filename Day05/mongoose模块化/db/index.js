//引入mongoose包
const mongoose = require('mongoose');
//连接数据库
//connect的第一个参数是 mongodb://服务器域名：端口号/连接的数据库名称
mongoose.connect("mongodb://localhost:27017/person", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//对mongoose对象的connection对象绑定事件，当数据连接的时候会触发open事件 
mongoose.connection.once("open",(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("数据库连接成功");
})

//monogodb数据库代码可以不暴露出去，直接require引入即可