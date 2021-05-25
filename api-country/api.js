const express = require('express');
const country = require('./info');
const infos = require("./info")
const cors = require('cors')
const app = express();
app.use(cors())
console.log(infos)





const port = 9001;

app.get("/country", function (req, res) {
    res.json(infos)
})
app.get("/country/:name",function(req,res){
    
    const pay= req.params.name
    const infocount=[]
   const result=infos.find(elem=>{
       return elem.name.toLocaleLowerCase===pay.toLocaleLowerCase

   })
//     for (let index=0;index<infos.length;index++){
       
//         if(pay===infos[index].name){
//           infocount.push(infos[index])
//     }
//    }
     res.json(result)

})

app.listen(port, function () {
    console.log(`Serveur à l'écoute dans le port ${port}`);
})