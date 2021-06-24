const expressValidator = require("express-validator");


const userValidation = [

    expressValidator.body("email").isEmail().exists(),
    
    expressValidator.body("firstname").exists(),

    expressValidator.body("lastname").exists(),
    
   expressValidator.body("password").exists().isLength(min = 8, max = 20),


]



module.exports = userValidation
