const mongoose = require("mongoose")
const express = require("express")
const routeAuth = require("../middlewares/routeAuth")


const router = express.Router()
const Track = mongoose.model("Track")

router.use(routeAuth)

router.get("/tracks", async (req,res)=>{
    const user = req.user
    const tracks = await Track.find({userId : user._id})
    res.send(tracks)
})

router.post("/tracks", async (req, res)=>{
    const {name, locations} = req.body
    if(!name || !locations){
        return res.status(422).send({error:"You must supply a name and location information..."})
    }
    try{
        const Track = mongoose.model("Track")
        const track = new Track({name, locations, userId : req.user._id})
        await track.save()
        res.send(track)
    } catch(err){
        res.status(422).send({error : err.message})
    }
})

module.exports = router