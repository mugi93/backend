const express = require("express")
const mongoose = require("mongoose")
const hotelRoutes = require("./routes/hotelRoute")
const restaurantRoutes = require("./routes/restauRoute")
const cors = require("cors")
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


app.use(express.json())

app.use("/hotels", hotelRoutes)
app.use("/restaurants", restaurantRoutes)

app.listen(port, () => {
    console.log("The server is waiting for requests")
})