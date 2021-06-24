const mongoose = require("mongoose")

const tableSchema = new mongoose.Schema({
    people: Number,
    price: Number,
    hasBathroom: Boolean,
    country:String,
    created: { type: Date, default: Date.now }
})

const Table = mongoose.model("Table", tableSchema)

module.exports = Table