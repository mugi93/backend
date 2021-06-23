const express = require("express")
const router = express.Router()
const { signUp } = require("../controller/controllerLogin")
const valid =require("../validator/valid")

router.post("/signup",valid, signUp)



module.exports = router