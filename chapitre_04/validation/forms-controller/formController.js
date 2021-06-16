const Forms = require("../../../model/forms")


const User = async (req, res) => {
    try {
        const users= await Forms.find()
        res.json(users)

    }
    catch (err) {
        console.error(err)

        res.status(500).json({ errorMessage: "There was a problem :(" })

    }

}
module.exports={
    User

}