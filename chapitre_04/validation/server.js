const express = require("express");
const mongoose = require("mongoose")

const cors = require("cors")
const routeVali   = require("./route/routeVali")


mongoose.connect("mongodb://localhost:27017/forms",{ useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.log("There was a problem when connection to the database");
    } else {
        console.log("I'm connected to the database")
    }
})


const app = express();

app.use(express.json());

app.use(cors())

app.use(express.json())

app.use("/user",routeVali)











app.listen(8000, () => {
    console.log('Server started in port 8000');
});