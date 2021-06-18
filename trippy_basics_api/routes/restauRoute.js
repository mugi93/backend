const express = require("express")
const { newNamehotel } = require("../controllers/hotelContreoller")
const router = express.Router()
const { getRestaurants, getRestaurant, addRestaurant, deleteRestaurant, newNameRestaurant } = require("../controllers/RestauController")

router.get("/", getRestaurants)

router.get("/:id", getRestaurant)

router.post("/", addRestaurant)

router.put("/:id",newNameRestaurant)

router.delete("/:id",deleteRestaurant)


module.exports = router