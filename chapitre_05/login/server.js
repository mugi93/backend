const express = require("express")
const mongoose = require("mongoose")
const userRout=require("./route/userRout")

mongoose.connect("mongodb://localhost:27017/login", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})


const port = 8000

const app = express()
app.use(express.json())

app.use("/", userRout)

app.get("*", (req, res) => {
    res.json({
        errorMessage: "The route was not found"
    }, 404)
})

app.listen(port, () => {
    console.log("The server is waiting for requests")
})