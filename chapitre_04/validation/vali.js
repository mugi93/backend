const express = require("express");
const expressValidator = require("express-validator");
const passwordValidator = require('password-validator');
const { body, validationResult } = require('express-validator');


const app = express();

app.use(express.json());

app.post('/signup',
    expressValidator.body("username").isLength(min = 4, max = 30),
    // custom((value) => {
    //     console.log("value:", value)
    //     if (value.lenght > 4) {
    //         return true
    //     } else {
    //         return false
    //     }

    expressValidator.body("email").isEmail(),
    
    expressValidator.body("age").is().digits()

    //   expressValidator.body("password").custom((value) => {
    //     var schema = new passwordValidator();
    //     schema
    //       .is().min(8) // Minimum length 8
    //       .is().max(100) // Maximum length 100
    //       .has().uppercase() // Must have uppercase letters
    //       .has().lowercase() // Must have lowercase letters
    //       .has().digits(2) // Must have at least 2 digits
    //       .has().not().spaces() // Should not have spaces

    //     return schema.validate(value);
    //   }),
    , (req, res) => {
        const errors = validationResult(req);
        if (errors.isEmpty() === false) {
            res.json({
                errors: errors.array()
            });
            return;
        } else {
            res.json({
                success: true,
                message: 'test ok'
            });
        }

       
    });





app.listen(8000, () => {
    console.log('Server started in port 8000');
});