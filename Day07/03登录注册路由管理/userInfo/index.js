const mongoose = require("mongoose");
const UserInfoSchema = new mongoose.Schema({
    user: String,
    pass: Number
})
module.exports = UserInfoSchema;