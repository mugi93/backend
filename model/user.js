const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:String,
    profilePicture:String,
    created: { type: Date, default: Date.now }
})

const modelUser = mongoose.model("modelUser", userSchema)

module.exports = modelUser