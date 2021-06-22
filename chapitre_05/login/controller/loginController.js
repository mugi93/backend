const modelLogin =require("../model/user")
const bcrypt = require('bcryptjs')



const login = async (req,res)=>{
    try {
        const username = req.body.username
        const password = bcrypt.hashSync(req.body.password)


        const user = await modelLogin.create({username,password})
        res.json (user)

    }catch(err){
        console.error(err)
    }
}




module.exports={
    login
}