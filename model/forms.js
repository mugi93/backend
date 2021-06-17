const mongoose = require("mongoose")

const formsSchema = mongoose.Schema({
    username: String,
    email:String,
    age: Number,
    city:String,
    date: { type: Date, default: Date.now }
})

const Forms = mongoose.model("Forms", formsSchema)

module.exports = Forms