const hotelModel = require("../model/hotel")
const expressValidator = require("express-validator");
const Room =require("../model/room")

const getHotels = async (req, res) => {
    try {


        const limit = req.query.limit
        const page = req.query.page

        console.log("params limit", limit)
        console.log("params page", page)
        if (typeof limit !== 'undefined' && typeof page !== 'undefined') {
            const hotelskpi = await hotelModel.find().populate("rooms").lean().skip(3).limit(3)
            res.json(hotelskpi)

        } else if (typeof limit !== 'undefined') {
            const hotels = await hotelModel.find().populate("rooms").lean().limit(3)
            // console.log(hotels)
            res.json(hotels)

        } else {
            const hotel = await hotelModel.find({}).populate("rooms").lean()
            // console.log(hotel)
            res.json(hotel)
        }



        // const hotel = await hotelModel.find().lean()
        // res.json(hotel)

    } catch (error) {
        console.log(error)

        res.status(500).json({ message: "There was a problem", error })
    }
}

const getHotel = async (req, res) => {
    try {
        const idHotel = req.params.id
        const hotel = await hotelModel.findById(idHotel).populate("rooms").lean()


        res.json(hotel)
    } catch (error) {
        console.log (error)

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
        const id = req.params.id
        const deleteH = await hotelModel.deleteOne({ _id: id })
        res.json({
            message: "hotel effacé"
        })

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

}