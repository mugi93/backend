const express = require("express")
const router = express.Router()
const { signUp } = require("../controller/controllerLogin")
const valid =require("../validator/valid")

router.post("/signup",valid, signUp)

router.all("*", (req, res) => {
    res.status(404).json({
        errorMessage: "The route was not found"
    })
})

module.exports = router