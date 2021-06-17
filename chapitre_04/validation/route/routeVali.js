const express = require("express")
const router = express.Router()
const { User , addUser, username, getId } = require("../forms-controller/formController")
const userValidation = require("../validator")



router.get("/", User)

router.post("/", userValidation,addUser)

router.get("/:username",username)

router.get("/id/:id",getId)


router.all("*", (req, res) => {
    res.status(404).json({
        errorMessage: "The route was not found"
    })
})


module.exports = router