const express = require('express');
const country = require('./info');
const infos = require("./info")
console.log(infos)


const app = express();

const port = 9001;

app.get("/country", function (req, res) {
    res.json(infos)
})
app.get("/country/:name",function(req,res){
    
    const pay= req.params.name
    const infocount=[]
   
    for (let index=0;index<infos.length;index++){
       
        if(pay===infos[index].name){
          infocount.push(infos[index])
    }
   }
     res.json(infocount)

})

app.listen(port, function () {
    console.log(`Serveur à l'écoute dans le port ${port}`);
})