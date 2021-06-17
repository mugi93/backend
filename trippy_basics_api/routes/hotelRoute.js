const express = require("express")
const router = express.Router()
const { getHotels, getHotel, addHotel } = require("../controllers/hotelContreoller")
const { validationHotels } = require("../middlewares/validation")

router.get("/", getHotels)

router.get("/:id", getHotel)

router.post("/", validationHotels, addHotel)

module.exports = router