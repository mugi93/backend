var request = require('request');
// var dataCountries = require("./index")
function reverse (){

    request.get("http://localhost:8000/countries", 
   
    function(err, res,body) {
        // var pays =["France","Germany","Italy","England","Swiss"]
        if(err){
            console.error(err);
            return;
        }
        var countries=JSON.parse(body).reverse();
        
        console.log(countries)
    });
}
reverse()