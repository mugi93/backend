const restaurantModel = require("../../model/restaurant")
const expressValidator = require("express-validator");

const getRestaurants = async (req, res) => {
    try {
        const restaurants = await restaurantModel.find().lean()

        res.json(restaurants)

    } catch (error) {
        res.status(500).json({ message: "There was a problem", error })
    }
}

const getRestaurant = async (req, res) => {
    try {
        const idRestaurant = req.params.id
        const restaurant = await restaurantModel.findById(idRestaurant).lean()

        res.json(restaurant)
    } catch (error) {

        res.status(500).json({ message: "There was a problem", error })
    }
}

const addRestaurant = async (req, res) => {
    try {
        const errors = expressValidator.validationResult(req);

        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() })
        } else {
            const newRestaurant = await restaurantModel.create(req.body)

            res.json({ message: "The restaurant was added!", newRestaurant })
        }
    } catch (error) {
        res.status(500).json({ message: "There was a problem", error })
    }
}



const newNameRestaurant = async (req, res) => {
    try {
        const id = req.params.id
        const newName = req.query.name
        console.log(newName)
        const changeName = await restaurantModel.updateOne({ _id: id }, { name: newName })
        res.json(changeName)


    } catch (error) {
        res.status(500).json({ message: "There was a problem", error })
    }
}

const deleteRestaurant = async (req, res) => {
    try {
        const id= req.params.id
        const deleteR = await restaurantModel.deleteOne({_id:id})
        res.json({
            message:"hotel effacé"
        })

    } catch (error) {
        res.status(500).json({ message: "There was a problem", error })
    }

}


module.exports = {
    getRestaurants,
    getRestaurant,
    addRestaurant,
    deleteRestaurant,
    newNameRestaurant
}