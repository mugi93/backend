const expressValidator = require("express-validator");


const userValidation=[
expressValidator.body("username").isLength(min = 4, max = 30),
    
expressValidator.body("email").isEmail(),

expressValidator.body("age").isInt(min=1,max=2 ),

expressValidator.body("city").isIn(['Tokyo', 'Paris', 'Los Angeles'])
]



module.exports=userValidation

