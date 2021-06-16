const express = require("express")
const router = express.Router()
const {User} = require("../forms-controller/formController")



router.get("/",User)


router.all("*", (req, res) => {
    res.status(404).json({
        errorMessage: "The route was not found"
    })
})


module.exports = {
    routeVali: router
}