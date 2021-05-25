const express = require('express');
const axios = require('axios')
const infos = require("./info")
const cors = require('cors')
const app = express();
app.use(cors())
console.log(infos)




// const api=axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e441f8a3a151d588a4932d2c5d310769')
// .then(response =>{ console.log(response)
//     response.json()

// }
    
//     )


    const port = 9001;
app.get("/movie", function (req, res) {
    res.json(api)
})

app.get("./movie/:id"),function (req,res){
    const id=req.params.id

}
app.get("./movie/:week/:today"),function(req,res){
    const week=req.params.week
    const today = req.params.today
}



app.listen(port, function () {
    console.log(`Serveur à l'écoute dans le port ${port}`);
})

app.get("/movie/")