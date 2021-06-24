const express = require("express")
const router = express.Router()
const {signUp, login}=require("../controllers/usersController")
const userValidation =require("../middlewares/userValidation")

router.post("/",userValidation,signUp)
router.post("/log",login)



module.exports = router