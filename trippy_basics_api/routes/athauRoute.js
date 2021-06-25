const express = require("express")
const router = express.Router()
const {verifyToken ,onlyAdmin}=require("../middlewares/authmiddle")
const {getUsers ,getUser}=require("../controllers/authController")


router.get("/",verifyToken,onlyAdmin,getUsers)
router.get("/user",verifyToken,getUser)


module.exports=router