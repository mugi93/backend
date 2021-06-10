const mongoose = require("mongoose")

const addressSchema = new mongoose.Schema({
    streetName: String,
    streetNumber: String,
    postCode: String,
    city:String,
    created: { type: Date, default: Date.now }
})

const Address = mongoose.model("Address", addressSchema)

module.exports = Address