const mongoose = require('mongoose')
const Hotel = require("./model/hotel");

const Restaurant = require("./model/restaurant")

mongoose.connect("mongodb://localhost:27017/trippy", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})


const addHotel = async () => {
    try {
        await Hotel.insertMany([
            {
                name: "One",
                address: "24 rue piece ",
                city: "city",
                country: "France",
                stars: 5,
                hasSpa: true,
                hasPool: true,
                PriceCategory: 1,
            }

        ])
    }catch (err) {
        console.error(err)
    }
 }

 const addResto=async () => {
    try {
        await Restaurant.insertMany([
            {
                name: "Piece",
                address: "24 rue piece ",
                city: "city",
                country: "France",
                stars: 5,
                cuisine:"BBQ",
                PriceCategory: 1,
            }

        ])
    }catch (err) {
        console.error(err)
    }
 }
addHotel()
addResto()