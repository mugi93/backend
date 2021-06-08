const express = require('express');
const cors = require('cors')
const mongoose = require("mongoose")

const app = express();
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/hero", (err) => {
    if (err) {
        console.error(err)
    } else {
        console.log("I'm connected to the database");
    }
})


const heroSchema = new mongoose.Schema({
    name: String,
    power: Array,
    color: String,
    isAlive: Boolean,
    age: Number,
    image: String


})
const Hero = mongoose.model("Hero", heroSchema)


Hero.insertMany([
    {
        name: "Iron Man",
        power: ["money"],
        color: "red",
        isAlive: true,
        age: 46,
        image: "https://blog.fr.playstation.com/tachyon/sites/10/2019/07/unnamed-file-18.jpg?resize=1088,500&crop_strategy=smart"
    },
    {
        name: "Thor",
        power: ["electricty", "worthy"],
        color: "blue",
        isAlive: true,
        age: 300,
        image: "https://www.bdfugue.com/media/catalog/product/cache/1/image/400x/17f82f742ffe127f42dca9de82fb58b1/9/7/9782809465761_1_75.jpg"
    },
    {
        name: "Daredevil",
        power: ["blind"],
        color: "red",
        isAlive: false,
        age: 30,
        image: "https://aws.vdkimg.com/film/2/5/1/1/251170_backdrop_scale_1280xauto.jpg"
    }
]).then(data => {
    console.log(data);
}).catch(err => {
    console.error("Error insertMany Card: ", err);
})



// const debug = (req, res, next) => {
//     console.log("Je fais un console.log à chaque requête")
//     next()
// }

// app.use(debug)

// const transformName = (req, res, next) => {
//     if (req.body.name === undefined) {
//         res.json({
//             message: "rajouter dans le body"
//         })
//     }

//     const checkName = superHeros.find(elem => {
//         return elem.name === req.body.name
//     })
//     if (checkName) {
//         res.json({
//             message: "erreur ce superheros existe deja dans la liste"
//         })
//     } else {
//         const lower = req.body.name.toLowerCase()
//         req.toLower = lower
//         next()

//     }

// }

// const validName = (req, res, next) => {
//     const name = req.params.name
//     const superH = superHeros.find(elem => {
//         console.log(elem.name)
//         return elem.name.toLowerCase() === name.toLowerCase()
//     })

//     if (superH) {
//         next()
//     } else {
//         res.json({
//             message: "error"
//         })
//     }
// }



const port = 8000;

app.get("/heroes", async (req, res) => {
    try {
        const superH = await Hero.find().exec()
        res.json(superH)
    } catch (error) {
        console.error("Error in GET /heroes", error)

        res.json({
            message: "Error when finding heroes "
        })
    }


})

app.get("/heroes/:name", async (req, res) => {

    try {
        const names = req.params.name;
        // console.log(names)
        const superName = await Hero.findOne({ name: names })

        res.json(superName)

    } catch (error) {
        console.error("Error in GET /heroes", error)

        res.json({
            message: "Error when finding heroes "
        })
    }


})
//     const superH = superHeros.find(elem => {
//         console.log(elem.name)
//         return elem.name.toLowerCase() === name.toLowerCase()
//     })

//     if (superH) {
//         res.json(superH)
//     }
// })

app.get("/heroes/:name/powers", async (req, res) => {
    try {
        const names = req.params.name
        const powers = await Hero.findOne({ name: names })
        res.json(powers.power)
    } catch (error) {
        console.error("Error in GET /heroes", error)

        res.json({
            message: "Error when finding heroes "
        })
    }
})





// const superH = superHeros.find(elem => {

//     return elem.name.toLowerCase() === name.toLowerCase()
// })

// if (superH) {
//     res.json(superH.power)
// }

app.post("/heroes", transformName, async (req, res) => {
    // console.log(req.toLower)
    // const heroAdd = {
    //     name: req.toLower
    // }

    const newHero =new Hero({
        name:req.body.name
    })
    newHero.save()
    const powers = await Hero.find()
    res.json({
        powers
    })
})









// app.post("/heroes", transformName, (req, res) => {
//     console.log(req.toLower)
//     const heroAdd = {
//         name: req.toLower
//     }

//     superHeros.push(heroAdd)

//     res.json({
//         superHeros,
//         message: "Ok, héros ajouté"
//     })
// })







// app.post("/heroes/:name/powers", (req, res) => {
//     const name = req.params.name;

//     const superH = superHeros.find(elem => {

//         return elem.name.toLowerCase() === name.toLowerCase()
//     })

//     const powerAdd = req.body.power

//     superH.power.push(powerAdd)

//     res.json(superH)

// })
// app.delete("/heroes/:name", validName, (req, res) => {
//     const name = req.params.name
//     const superH = superHeros.findIndex(elem => {

//         return elem.name.toLowerCase() === name.toLowerCase()
//     })

//     if (superH >= 0) {
//         const deletes = superHeros.splice(superH, 1)
//         res.json({
//             message: `${name} effacé correctement`
//         })
//     }

// })
// app.delete("/heroes/:name/power/:power", validName, (req, res) => {

//     const name = req.params.name
//     const power = req.params.power
//     const superH = superHeros.find(elem => {

//         return elem.name.toLowerCase() === name.toLowerCase()
//     })
//     if (superH) {
//         const superPower = superHeros.findIndex(elem => {
//             return elem.power === power
//         })
//         const deletes = superH.power.splice(superPower, 1)
//         res.json({
//             message: ` le pouvoir ${power} est effacé`
//         })
//     }


// })
// app.put("/heroes/:name", (req, res) => {
//     const name = req.params.name
//     const repla = req.body
//     const superH = superHeros.findIndex(elem => {

//         return elem.name.toLowerCase() === name.toLowerCase()
//     })

//     if (superH >= 0) {
//         const deletes = superHeros.splice(superH, 1, repla)
//         res.json({
//             superHeros
//         })
//     }
// })

app.get("*", (req, res) => {
    res.json({
        message: "The route doesn't exist"
    })
})



app.listen(port, () => {
    console.log(`Serveur à l'écoute dans le port ${port}`);
})
