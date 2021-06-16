const express = require("express");
const mongoose = require("mongoose")
const expressValidator = require("express-validator");
const { body, validationResult } = require('express-validator');
const cors = require("cors")
const Forms = require("../../model/forms")

mongoose.connect("mongodb://localhost:27017/forms", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})


const app = express();

app.use(express.json());

app.post('/signup',
    expressValidator.body("username").isLength(min = 4, max = 30),
    
    expressValidator.body("email").isEmail(),
    
    expressValidator.body("age").isInt().isLength(min=1,max=2 ),

    expressValidator.body("city").isIn(['Tokyo', 'Paris', 'Los Angeles'])
    


    
    , async (req, res) => {
       try{
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
       }catch(err) {
        console.error(err)

        res.status(400).json({ errorMessage: "There was a problem :(" })

    }
        

       
    });





app.listen(8000, () => {
    console.log('Server started in port 8000');
});