const userModel = require("../model/userModel")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const expressValidator = require("express-validator");



const signUp = async (req, res) => {
    try {

        const errors = expressValidator.validationResult(req);
        if (errors.isEmpty() === false) {
            res.status(400).json({
                errors: errors.array()
            });

        } else {

            const firstname = req.body.firstname
            const surname = req.body.surname
            const email = req.body.email
            const date = req.body.date
            const password = bcryptjs.hashSync(req.body.password)


            const user = await userModel.create({ firstname, surname, email, date, password })

            res.json({ message: "User was created!", user })
        }
    } catch (error) {
        console.log("Error: ", error)
        res.status(500).json({ message: "There was an error while treating the request" })
    }
}







module.exports = {
    signUp
}