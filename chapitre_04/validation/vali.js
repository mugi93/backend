const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const expressHandlebars = require("express-handlebars");
const app = express();
app.engine("handlebars", expressHandlebars());
app.set("view engine", "handlebars");

app.use(express.static("public"));




mongoose.connect("mongodb://localhost:27017/students", (err) => {
    if (err) {
        console.error(err)
    } else {
        console.log("I'm connected to the database");
    }
})

const port = 8000

const app = express()

app.use(cors())
app.use(express.json())




app.get("/", (req, res) => {
    res.render("home", {
        title: "Handlebars c'est nul",
        img: 'https://restcountries.eu/data/fra.svg',
        authors: ["Auteur 1", "Auteur 2", "Auteur 3"],
    });

})


app.listen(port, () => {
    console.log(`J'écoute des requêtes sur le port ${port}`);
})