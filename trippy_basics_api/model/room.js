const mongoose = require("mongoose")

const roomSchema = new mongoose.Schema({
    people: Number,
    price: Number,
    hasBathroom: Boolean,
    country:String,
    created: { type: Date, default: Date.now }
})

const Room = mongoose.model("Room", roomSchema)

module.exports = Room