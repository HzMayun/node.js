const mongoose = require("mongoose");

//连接数据库
//connect第一个参数：mongodb://域名:端口号/连接的数据库名称
mongoose.connect("mongodb://127.0.0.1:27017/person", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.once("open", (err) => {
    // err?return err:console.log("Mongodb连接数据库成功");
    if (!err) {
        console.log("Mongodb连接数据库成功");
    }
})

//创建一个集合的约束
//实例化mongoose.schema，传入约束对象进行约束
//并不是直接对某个集合做约束，而是写好一个约束以后给某个集合使用
//返回一个schema对象
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    age: Number,
    sex: String,
    createTime: {
        type: Date,
        default: Date.now
    }
})


//model对象相当于集合， 对集合进行操作
//创建实例化model对象，并传入约束
const Wang = mongoose.model("Wang", personSchema);

new Wang({
    name: '王五',
    age: '22',
    sex: '女',
    createTime: Date.now()
}).save((err) => {
    if (err) {
        console.log("初始化文档错误" + err);
        return;
    }
    console.log("初始化文档成功")
})
