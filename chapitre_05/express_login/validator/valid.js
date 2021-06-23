const expressValidator = require("express-validator");


const userValidation=[
expressValidator.body("firstname").exists(),

expressValidator.body("surname").exists(),

expressValidator.body("password").exists().isLength(min=3,max=4),

    
expressValidator.body("email").isEmail().exists(),

expressValidator.body("date").isInt().exists(),


]



module.exports=userValidation
