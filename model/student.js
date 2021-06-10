const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
    firstName: String,
    surname: String,
    address: {
        type:mongoose.Types.ObjectId,
        ref:"address"
    },
    created: { type: Date, default: Date.now }
})

const Student = mongoose.model("Address", studentSchema)

module.exports = Student