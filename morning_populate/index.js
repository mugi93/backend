const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/mangoose_populate", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})