const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const config = require("../config")
const modelUsers = require("../model/user")


const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        console.log(token)

        const result = jwt.verify(token, config.secret)
        console.log(result)

        if (result.id) {
            const user = await modelUsers.findById({ _id: result.id }).lean()
            console.log(user)

            req.user = user
            next()
        }
    } catch (error) {
        console.log("Error: ", error)
        res.status(401).json({ message: "You don't have acces to this information" })
    }

}


const onlyAdmin = (req, res, next) => {
    console.log("req.user",req.user)
    console.log("req.user.role",req.user.role)
    if (req.user && req.user.role === 1) {

        next()
    } else {
        res.status(403).json({ message: "you  don't have right to enter here" })
    }
}

module.exports = { verifyToken, onlyAdmin }