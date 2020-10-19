const mongoose = require("mongoose");
require("./db");
const WangSchema = require("./Wang")

// 创建model对象（Wang集合），并传入约束
const Wang = mongoose.model("Wang",WangSchema);
Wang.create([
    {
        name:"王佳2号",
        age : 17,
        sex:"女",
        createTime:Date.now(),
    },
    {
        name:"胡周2号",
        age : 18,
        sex:"男",
        createTime:Date.now(),
    },
]).then((value)=>{
    console.log(value);
}).catch((err)=>{
    console.log(err);
})