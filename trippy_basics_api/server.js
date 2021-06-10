const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")
const Hotel = require("../model/hotel")
const Restaurant = require("../model/restaurant")
const { MongoClient, ObjectID } = require('mongodb')

mongoose.connect("mongodb://localhost:27017/trippy", (err) => {
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


app.get("/hotels", async (req, res) => {

    try {
        const hotels = await Hotel.find()

        res.json(hotels)
    } catch (err) {
        console.error(err)

        res.status(500).json({ errorMessage: "There was a problem :(" })
    }

})

app.get("hotels/:id", async (req, res) => {
    try {
        const id = req.params.id
        console.log(id)
        const hotel = await Hotel.find( `Objectid(${id})`)
        if (hotel) {
            res.json( hotel)
        } else {
            res.json({
                message: "Hotel not found"
            })
        }


    } catch (err) {
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