const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")
const modelAddress = require("../model/address")
const modelStudent = require("../model/student")


mongoose.connect("mongodb://localhost:27017/mangoose_populate", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})
const port = 8000

const app = express()

const debug = (req, res, next) => {
    console.log("I received a request!");

    next()
}

app.use(cors())

app.use(express.json())

app.use(debug)


app.get("/student", async (req, res) => {
    try {


        const studentInfo = await modelStudent.find({}).populate("adress",)
        console.log("student", studentInfo)
        res.json(studentInfo)

    }
    catch (err) {
        console.error(err)

        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
})









app.get("*", (req, res) => {
    res.json({
        errorMessage: "The route was not found"
    }, 404)
})

app.listen(port, () => {
    console.log("Server is listening at port ", port);
})