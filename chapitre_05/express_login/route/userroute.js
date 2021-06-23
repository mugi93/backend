const express = require("express")
const router = express.Router()
const { getUsers, getUser } =require("../controller/userController")
const {verifyToken}=require("../middleware/authoMiddleware")



router.get("/",verifyToken,getUsers)



module.exports=router