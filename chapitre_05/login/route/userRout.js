const express = require("express")
const router = express.Router()
const {signUp, login} = require("../controller/loginController")


router.post("/",signUp)
 
router.post("/login",login)


module.exports = router