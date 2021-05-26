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
    res.json(infos)
})

app.get("/movie/:id"),function (req,res){
    const id=parseInt(req.params.id)
  const moviePop = infos.find(elem =>{
      console.log(elem)
        return elem.id===id
    })
    if(moviePop){
        res.json(moviePop)
    }
    
}
// app.get("/movie/:week/:today"),function(req,res){
//     const week=req.params.week
//     const today = req.params.today
// }



app.listen(port, function () {
    console.log(`Serveur à l'écoute dans le port ${port}`);
})

// app.get("/movie/")