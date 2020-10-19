const mongoose = require("mongoose");
const UserInfoSchema = new mongoose.Schema({
    user: String,
    pass: String
})
module.exports = UserInfoSchema;