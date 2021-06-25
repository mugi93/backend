const modelUsers=require("../model/user")


const getUsers = async (req, res) => {
    try {
        const users = await modelUsers.find().lean()
        console.log(users)

        res.json(users)
    } catch (error) {
        console.log("Error: ", error)
        res.status(500).json({ message: "There was an error while treating the request" })
    }
}

const getUser = (req, res) => {
    res.json(req.user)
}

module.exports = { getUsers, getUser }