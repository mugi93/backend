// function getCountries() {
//     request.get("https://restcountries.eu/rest/v2/all", function(error, response, body) {
//         var countries = JSON.parse(body);
				
// 				/*
// 				var countriesNames = [];
//         for (var i = 0; i < countries.length; i++) {
//             var country = countries[i];
//             countriesNames.push(country.name);
//         }
//         console.log(countriesNames.join("-"));
//         */

//        var countriesNames = countries.map(function(element) {
//            return element.name;
//        })

//        console.log(countriesNames.join("-"));
//     });

const express = require('express');
const app = express();
const port = 8001;
app.listen(port, () => {
  console.log('Server started on port: ' + port);
});
function getCountries(){

    request.get("https://restcountries.eu/rest/v2/all", function(error, response, body) {
    var countries = JSON.parse(body);

    var countriesNames = countries.map(function(element) {
         return element.name;
    });

    app.get('/', (req, res) => {
    res.send(countriesNames)
    });
})
}



