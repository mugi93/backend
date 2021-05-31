const express = require('express');
const cors = require('cors')
const app = express();
app.use(express.json())
app.use(cors())


const superHeros = [{
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
}]
const debug = (req, res, next) => {
    console.log("Je fais un console.log à chaque requête")
    next()
}

app.use(debug)

const transformName = (req, res, next) => {

    const checkName = superHeros.find(elem => {
        return elem.name === req.body.name
    })
    if (checkName) {
        res.json({
            message: "erreur ce superheros existe deja dans la liste"
        })
    } else {
        const lower = req.body.name.toLowerCase()
        req.toLower = lower

    }





    next()





}




const port = 8000;

app.get("/heroes", (req, res) => {


    res.json(superHeros)


})

app.get("/heroes/:name", (req, res) => {

    const name = req.params.name;

    const superH = superHeros.find(elem => {
        console.log(elem.name)
        return elem.name === name
    })

    if (superH) {
        res.json(superH)
    }
})

app.get("/heroes/:name/powers", (req, res) => {
    const name = req.params.name;

    const superH = superHeros.find(elem => {

        return elem.name === name
    })

    if (superH) {
        res.json(superH.power)
    }
})

app.post("/heroes", transformName, (req, res) => {
    console.log(req.toLower)
    const heroAdd = {
        name: req.toLower
    }

    superHeros.push(heroAdd)

    res.json({
        superHeros,
        message: "Ok, héros ajouté"
    })
})

app.post("/heroes/:name/powers", (req, res) => {
    const name = req.params.name;

    const superH = superHeros.find(elem => {

        return elem.name === name
    })

    const powerAdd = req.body.power

    superH.power.push(powerAdd)

    res.json(superH)

})


app.get("*", (req, res) => {
    res.json({
        message: "The route doesn't exist"
    })
})



app.listen(port, () => {
    console.log(`Serveur à l'écoute dans le port ${port}`);
})
