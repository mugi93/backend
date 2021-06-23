const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email:String,
    firstname: { type: String, unique: true },
    surname : { type: String, unique: true },
    date: Date,
    password: String,
    
})

const userModel = mongoose.model("User", userSchema)

module.exports = userModel