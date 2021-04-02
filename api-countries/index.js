var express = require('express');
var app = express();
var cors = require('cors')
app.use(cors())
var port = 8000;

var pays =["France","Germany","Italy","England","Swiss"]

app.get('/countries', 

(req, res) => {
    res.send(pays);
  });

  app.listen(port, () => {
  console.log('Server started on port: ' + port);
});