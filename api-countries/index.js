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

const pays =["France","Germany","Italy","England","Swiss"]

app.get('/countries', 

(req, res) => {
    res.send(pays);
  });

  app.listen(port, () => {
  console.log('Server started on port: ' + port);
});