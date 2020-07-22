const express = require("express")
const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")

const User = mongoose.model("User")

const router = express.Router()

router.post("/signup", async (req,res)=>{
    
    try {
        const user = new User({email:req.body.email, password:req.body.password})
        await user.save()
        const token = jwt.sign({userId : user._id}, "THE_SECRET_KEY")
        res.send({token})
    } catch(err){
        return res.status(422).send(err.message)
    }
})

router.post("/signin", async(req,res)=>{
    const {email, password} = req.body
   
    if(!email || !password){
    
        return res.status(422).send({error:"Please authenticate yourself..."})

    }
    const user = await User.findOne({email})
    if(!user){
        return res.status(422).send({error:"Please authenticate yourself***"})
    }
    
    try{
        await user.compare(password)
        
        const token = jwt.sign({userId : user._id}, "THE_SECRET_KEY")
       
        res.status(200).send({token})
    } catch(err){
        res.status(422).send({error:"Please authenticate yourself..."})
    }
})

module.exports = router