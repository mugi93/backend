const express = require('express');
const cors = require('cors')
const app = express();
app.use(express.json())
app.use(cors())


const port = 9000;
const student = ["Mugi", "Baka", "Amir", "Karim", "Faruk", "Sabrina", "Asma", "Fasulu"]



app.get("/students", ( req,res) => {
    res.json(student)
    // console.log("po")
    

})

app.post("/students/",(req,res)=>{
    const stu= req.body.name
    
     student.push(stu)
     
    

})
app.get("*", (req, res) => {
    res.json({
        message: "The route doesn't exist"
    })
})

app.listen(port,  () => {
    console.log(`Serveur à l'écoute dans le port ${port}`);
})
