const modelLogin =require("../model/user")
const bcrypt = require('bcryptjs')



const signUp = async (req,res)=>{
    try {
        const username = req.body.username
        const password = bcrypt.hashSync(req.body.password)


        const user = await modelLogin.create({username,password})
        res.json (user)

    }catch(err){
        console.error(err)
    }
}


const login = async (req,res)=>{
    try {
        const username = req.body.username
        const password =req.body.password
        console.log(password)
        const users = await modelLogin.findOne({username:username})
        console.log(users[0].password)

        const auth = await bcrypt.compareSync(passsword,users.passsword)
        console.log(auth)
        if(auth){
            res.json("ok")

        }else{
            res.json("raté")
        }

    } catch (error) {
        console.error(error)
    }
}


module.exports={
    signUp,
    login
}