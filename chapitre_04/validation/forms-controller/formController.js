const Forms = require("../../../model/forms")
const expressValidator = require("express-validator");


const User = async (req, res) => {
    try {
        const users = await Forms.find()
        res.json(users)

    }
    catch (err) {
        console.error(err)

        res.status(500).json({ errorMessage: "There was a problem :(" })

    }

}

const addUser = async (req, res) => {
    try {
        const errors = expressValidator.validationResult(req);
        if (errors.isEmpty() === false) {
            res.status(400).json({
                errors: errors.array()
            });

        } else {
            const add = await Forms.create(req.body)
            res.json({
                add,
                message: 'user add'
            });
        } 
    }catch (err) {
            console.error(err)
            res.status(500).json({ message: "probleme" })

        }
    }

module.exports = {
        User,
        addUser

    }