const userModel =require("../model/userModel")


const getUsers = async (req, res) => {
    try {
        const users = await userModel.find().lean()

        res.json(users)
    } catch (error) {
        console.log("Error: ", error)
        res.status(500).json({ message: "There was an error while treating the request" })
    }
}



module.exports = { getUsers }