const mongoose = require("mongoose")

const addressSchema = new mongoose.Schema({
    streetName: String,
    streetNumber: String,
    postCode: String,
    city: String,
    created: { type: Date, default: Date.now }
})

const modelAddress = mongoose.model("modelAddress", addressSchema)

module.exports = modelAddress