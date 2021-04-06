// var express = require('express');
// var app = express();
// var cors = require('cors')
// app.use(cors())
// var port = 8000;

// var pays =["France","Germany","Italy","England","Swiss"]

// app.get('/countries', 

// (req, res) => {
//     res.send(pays);
//   });

//   app.listen(port, () => {
//   console.log('Server started on port: ' + port);
// });


const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors())
const port = 8000;

// const pays =["Srilanka","India","Usa","Japan","Swiss"]
 const pays =["France","Germany","Italy","England","Swiss"]
 const capital=["paris","berlin","rome","londre","berne"]

app.get('/countries', 

(req, res) => {
    res.send(pays);
  });
  
  app.get('/countries/[country_name]/capital',
  (req,res)=>{
     const country_name= req.params.country_name;
     
  res.send(capital);

  });
 


  app.listen(port, () => {
  console.log('Server started on port: ' + port);
});