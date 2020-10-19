const mongoose = require("mongoose")

//创建一个集合的约束
const WangSchema = mongoose.Schema({
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
    },
})
//将约束暴露出去
module.exports = WangSchema;

