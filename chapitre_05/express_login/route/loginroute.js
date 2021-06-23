const express = require("express")
const router = express.Router()
const { signUp, login } = require("../controller/controllerLogin")
const valid =require("../validator/valid")

router.post("/signup",valid, signUp)
router.post("/login",login)

router.all("*", (req, res) => {
    res.status(404).json({
        errorMessage: "The route was not found"
    })
})

module.exports = router