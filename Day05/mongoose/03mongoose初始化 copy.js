//引入mongoose包
const mongoose = require("mongoose");

//连接MongoDB数据库
//connect第一个参数：mongodb://域名:端口号/连接的数据库名称
mongoose.connect("mongodb://127.0.0.1:27017/person", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//对mongoose对象的connection对象绑定事件，当数据库连接的时候会触发open事件
mongoose.connection.once("open", (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("MongoDB连接成功")
})


//创建一个集合的约束
//实例化mongoose.schema,传入约束对象进行约束
//并不是直接对某个集合做约束，而是写好一个约束以后给某个集合使用
//返回一个schema对象
const WangSchema = new mongoose.Schema({
    name: {
        type: String, //类型是字符串
        unique: true,
        required: true,
    },

    //age字段必须是number格式
    age: Number,
    sex: String,
    //兴趣必须是数组格式
    // hobby: Array,
    hobby: [String], //数组的值必须都是字符串
    //创建时间字段必须是 时间对象
    createTime: {
        type: Date,
        default: Date.now
    },
})

//创建model对象（Wang集合），并传入约束
const Wang = mongoose.model("Wang", WangSchema);
/* 
    create：创建操作
        - create方法第一个参数是一个对象（添加一条数据的时候）或一个数组（当添加多条数据的时候），第二个参数是回调函数
        - 当前create方法也可以返回promise对象，就可以不用书写回调函数了

*/


/* Wang.create([
    {
        name:"王三",
        age : 12,
        sex : "女",
        hobby : ["写代码","洗头发"]
    },
    {
        name:"王四",
        age : 40,
        sex : "男",
        hobby : ["写代码","洗头发"]
    },
    {
        name:"王二",
        age : 12,
        sex : "女",
        hobby : ["写代码","洗头发"]
    },
],(err)=>{
    if(err){
        console.log(err);
    }
    console.log("添加成功");
}) */


/* const result = Wang.create({
    name: "胡",
    age: 18,
    sex: "男"
})

console.log(result);

result.then((value) => {
    console.log(value); //添加成功后，value就是添加的内容
}).catch((err) => {
    console.log(err);
}) */


//修改 update :      


// const result = Wang.update({ name: "胡周" }, { $set: { age: 100 } })
// result.then((value) => {
//     console.log(value);
// }).catch((err) => {
//     console.log(err);
// })


/* Wang.updateMany({}, {
    $inc: { age: 20 }
}).then()
// Wang.update({name:"胡周"},{$set:{age:100}}).then() */

/* const result = Wang.find({sex:"女"});
result.then((value)=>{
    console.log(value);
}).catch((err)=>{
    console.log(err);
}) */

const result = Wang.deleteOne({name:'王五'})
result.then((value)=>{
    console.log(value);
})
