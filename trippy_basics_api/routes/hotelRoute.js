const express = require("express")
const router = express.Router()
const { getHotels, getHotel, addHotel, newNamehotel,deleteHotel, getlimit } = require("../controllers/hotelContreoller")
const { validationHotels } = require("../middlewares/validation")

router.get("/", getHotels,getlimit)

router.get("/:id", getHotel)

router.post("/", validationHotels, addHotel)


router.put("/:id",newNamehotel)

router.delete("/:id",deleteHotel)

module.exports = router