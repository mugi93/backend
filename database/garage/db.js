const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/garage',(err)=>{
    if (err) {
        console.error(err)
    } else {
        console.log("I'm connected to the database");
    }
})


const carSchema = new mongoose.Schema({
    
    brand: String,
    model: String,
    year: Number,
    created : {type:Date ,default:Date.now}
})

const Car = mongoose.model("Car",carSchema);


const renault1 =new Car({
    brand :"Renault",
    model:"Espace",
    year:1999
})

renault1.save((err,car)=>{
    if (err) {
        console.log('something went wrong');
        console.log(err);
      } else {
    console.log(`save ${car.brand} with ${car._id}`)
      }

})

const renault2= new Car({
    brand :"Renault",
    model:"Scenic",
    year:2004

})

const peugeot = new Car({
    brand :"Peugeot",
    model:"308",
    year:2017
})


renault2.save((err,car)=>{
    if (err) {
        console.log('something went wrong');
        console.log(err);
      } else {
    console.log(`save ${car.brand} with ${car._id}`)
      }

})

peugeot.save((err,car)=>{
    if (err) {
        console.log('something went wrong');
        console.log(err);
      } else {
    console.log(`save ${car.brand} with ${car._id}`)
      }

})
