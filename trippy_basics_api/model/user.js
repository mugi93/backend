const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email: String,
    firstname:String,
    lastname:String,
    password:String,
    role: Number
   
})

const modelUsers = mongoose.model("modelUser", userSchema)

module.exports = modelUsers