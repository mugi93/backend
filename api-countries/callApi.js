// var request = require('request');
// 
// function reverse (){

//     request.get("http://localhost:8000/countries", 
   
//     function(err, res,body) {
//         
//         if(err){
//             console.error(err);
//             return;
//         }
//         var countries=JSON.parse(body).reverse();
        
//         console.log(countries)
//     });
// }
// reverse()




let request = require('request');

let reverse= ()=>{

    request.get("http://localhost:8000/countries", 
   
    function(err, res,body) {
       
        if(err){
            console.error(err);
            return;
        }
        const countries=JSON.parse(body).reverse();
        
        console.log(countries)
    });
}
reverse()