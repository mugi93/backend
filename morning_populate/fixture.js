const mongoose = require('mongoose')
const Address = require("../model/address")
const Student = require("../model/student")


mongoose.connect("mongodb://localhost:27017/mongoose_populate", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})

const addStudent = async () => {
    try {
        await Address.deleteMany({})
        await Student.deleteMany({})

        const address = await Address.insertMany([
            {
                streetName: "byebye",
                streetNumber: "5",
                postCode: "5899",
                city: "Manchester",
            },
            {
                streetName: "cool",
                streetNumber: "10",
                postCode: "5899",
                city: "Manchester",
            },
            {
                streetName: "marie curie",
                streetNumber: "10",
                postCode: "5900",
                city: "Manchester",
            }
        ])
        console.log(addStudent)

        await Student.insertMany([
            {
                firstName: "Mugilan",
                surname: "Gnanasegaram",
                address: [address[0]],

            },

            {
                firstName: "luffy",
                surname: "monkey",
                address: [address[1]],

            },
            {
                firstName: "jojo",
                surname: "bizarre",
                address: [address[2]],

            }
        ])

    }catch (err) {
        console.error(err)
    }
}