const mongoose = require("mongoose")

const loginSchema = new mongoose.Schema({
   username:String,
   password:String,
    created: { type: Date, default: Date.now }
})

const modelLogin = mongoose.model("modelLogin", loginSchema)

module.exports = modelLogin