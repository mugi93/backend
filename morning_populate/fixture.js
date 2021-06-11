const mongoose = require('mongoose')
const modelAddress = require("../model/address")
const modelStudent = require("../model/student")


mongoose.connect("mongodb://localhost:27017/mongoose_populate", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})

const addStudent = async () => {
    try {
        await modelAddress.deleteMany({})
        await modelStudent.deleteMany({})

        const address = await modelAddress.insertMany([
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
        console.log(address)

        await modelStudent.insertMany([
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
        console.log("base de donnes creer")
        const adressId=  await modelAddress.find({_id})
        console.log(adressId)
    }catch (err) {
        console.error(err)
    }
}


const students= async ()=>{
    try{
        const studentInfo= await modelStudent.find( {}).populate("adress")
        console.log("student",studentInfo)
    }catch (err) {
        console.error(err)
    }
}
// addStudent()
