const mongoose = require("mongoose");

//连接数据库
//connect第一个参数：mongodb://域名:端口号/连接的数据库名称
mongoose.connect("mongodb://127.0.0.1:27017/atHuZhou", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.once("open", (err) => {
    // err?return err:console.log("Mongodb连接数据库成功");
    if (!err) {
        console.log("Mongodb连接数据库成功");
    }
})


