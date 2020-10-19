const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/person", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.once("open", (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Mongoose连接成功");
})
//mongo链接数据库代码可以不暴露出去，直接require引入就可以了