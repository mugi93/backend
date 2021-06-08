const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/garage', (err) => {
    if (err) {
        console.error(err)
    } else {
        console.log("I'm connected to the database");
    }
})

const ObjectId = require('mongoose').Types.ObjectId; 


const carSchema = new mongoose.Schema({

    brand: String,
    model: String,
    year: Number,
    created: { type: Date, default: Date.now }
})


const Car = mongoose.model("Car", carSchema);



Car.findById( "60be36e5e33149054c847ba3" , (err, car) => {
    if (!err) {
        console.log("voiture renault espace ligne 30",car);
    }
});


Car.updateOne({ model: "Espace" }, { year: 2000 }, (err, car) => {
    if (!err) {
        console.log(car)
    }

})

Car.deleteMany({brand:"Renault"},(err,car)=>{
    
    if (!err) {
        console.log(car)
    }

})

