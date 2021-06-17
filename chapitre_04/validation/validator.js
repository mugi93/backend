const expressValidator = require("express-validator");


const userValidation=[
expressValidator.body("username").isLength(min = 4, max = 30).exists(),
    
expressValidator.body("email").isEmail().exists(),

expressValidator.body("age").isInt(min=1,max=2 ).exists(),

expressValidator.body("city").isIn(['Tokyo', 'Paris', 'Los Angeles']).exists()
]



module.exports=userValidation

