const express = require("express")
const router = express.Router()
const { User , addUser, username, getId, getEmail } = require("../forms-controller/formController")
const userValidation = require("../validator")



router.get("/", User)

router.post("/", userValidation,addUser)

router.get("/username/:username",username)

router.get("/:id",getId)

router.get("/email/:email",getEmail)


router.all("*", (req, res) => {
    res.status(404).json({
        errorMessage: "The route was not found"
    })
})


module.exports = router