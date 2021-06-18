const hotelModel = require("../../model/hotel")
const expressValidator = require("express-validator");

const getHotels = async (req, res) => {
    try {
        const hotels = await hotelModel.find().lean()

        res.json(hotels)
    } catch (error) {

        res.status(500).json({ message: "There was a problem", error })
    }
}

const getHotel = async (req, res) => {
    try {
        const idHotel = req.params.id
        const hotel = await hotelModel.findById(idHotel).lean()

        res.json(hotel)
    } catch (error) {

        res.status(500).json({ message: "There was a problem", error })
    }
}

const addHotel = async (req, res) => {
    try {
        const errors = expressValidator.validationResult(req);

        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() })
        } else {
            const newHotel = await hotelModel.create(req.body)

            res.json({ message: "The hotel was added!", newHotel })
        }
    } catch (error) {
        res.status(500).json({ message: "There was a problem", error })
    }
}

const newNamehotel = async (req, res) => {
    try {
        const id = req.params.id
        const newName = req.query.name
        console.log(newName)
        const changeName = await hotelModel.updateOne({ _id: id }, { name: newName })
        res.json(changeName)


    } catch (error) {
        res.status(500).json({ message: "There was a problem", error })
    }
}

const deleteHotel = async (req, res) => {
    try {
        const id= req.params.id
        const deleteH = await hotelModel.deleteOne({_id:id})
        res.json({
            message:"hotel effacé"
        })

    } catch (error) {
        res.status(500).json({ message: "There was a problem", error })
    }

}

const getlimit = async (req, res) => {
    try {
        const params = req.query.limit
        console.log("params",params)
        const deleteH = await hotelModel.find().splice(0,params)
        
        res.json(deleteH)

    } catch (error) {
        res.status(500).json({ message: "There was a problem", error })
    }

}

module.exports = {
    getHotels,
    getHotel,
    addHotel,
    newNamehotel,
    deleteHotel,
    getlimit
}