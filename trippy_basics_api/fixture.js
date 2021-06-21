const mongoose = require('mongoose')
const Hotel = require("../model/hotel");
const Restaurant = require("../model/restaurant")
const Room = require("../model/room")
const Table=require("../model/table")



mongoose.connect("mongodb://localhost:27017/trippy", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})
// const room = async () => {
//     try {
//         await Room.insertMany([
//             {
//                 people: 5,
//                 price: 50,
//                 hasBathroom: false,
//                 country: "France",
//             },

//             {
//                 people: 2,
//                 price: 25,
//                 hasBathroom: true,
//                 country: "France",
//             }
//         ])


//     } catch (error) {
//         console.error(error)
//     }
// }

const addHotel = async () => {
    try {
        const rooms = await Room.insertMany([
            {
                people: 5,
                price: 50,
                hasBathroom: false,
                country: "France",
            },

            {
                people: 2,
                price: 25,
                hasBathroom: true,
                country: "France",
            }
        ])

        const hotel = await Hotel.insertMany([
            {
                name: "One",
                address: "24 rue piece ",
                city: "city",
                country: "France",
                stars: 5,
                hasSpa: true,
                hasPool: true,
                PriceCategory: 1,
                rooms: [rooms[0], rooms[1]]
            }

        ])

    } catch (err) {
        console.error(err)
    }
}

const addResto = async () => {
    try {
        const table = await Table.insertMany([
            {
                seat: 6,
                isVip: true
            },
            {
                seat:3,
                isVip: false

            }
        ])

        await Restaurant.insertMany([
            {
                name: "Piece",
                address: "24 rue piece ",
                city: "city",
                country: "France",
                stars: 5,
                cuisine: "BBQ",
                PriceCategory: 1,
                tables:[table[0],table[1]]

            }

        ])
    } catch (err) {
        console.error(err)
    }
}
// addHotel()
addResto()
// room()