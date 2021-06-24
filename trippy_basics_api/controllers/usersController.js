const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const expressValidator = require("express-validator");
const usersModel =require("../model/user")
const config =require("../config")


const signUp = async (req, res) => {
    try {

        const errors = expressValidator.validationResult(req);
        if (errors.isEmpty() === false) {
            res.status(400).json({
                errors: errors.array()
            });

        } else {

            const firstname = req.body.firstname
            const lastname = req.body.lastname
            const email = req.body.email
            const password = bcryptjs.hashSync(req.body.password)


            const user = await usersModel.create({ firstname, lastname, email, password })

            res.json({ message: "User was created!", user })
        }
    } catch (error) {
        console.log("Error: ", error)
        res.status(500).json({ message: "There was an error while treating the request" })
    }
}

const login = async (req, res) => {
    try {
        const email = req.body.email
        const user = await usersModel.findOne({ email })

        const verif = bcryptjs.compareSync(req.body.password, user.password)
        if (verif) {
            const token = jwt.sign(
                {
                    id: user._id
                }, config.secret,
                {
                    expiresIn: 3600
                }
            )
            res.json({ message: "You're now login!", token })
        }else{
            res.status(401).json({ message: "Login failed" })
        }

    } catch (error) {
        console.log("Error: ", error)
        res.status(500).json({ message: "There was an error while treating the request" })
    }

}




module.exports = {
    signUp,
    login
    
}