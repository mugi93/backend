const express = require("express")
const router = express.Router()
const { getRestaurants, getRestaurant, addRestaurant } = require("../controllers/RestauController")

router.get("/", getRestaurants)

router.get("/:id", getRestaurant)

router.post("/", addRestaurant)

module.exports = router