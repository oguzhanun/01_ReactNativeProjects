require("./models/User")  //that require statement is enough for creating model.
                          // IT HAS TO BE WRITTEN AT THE TOP. THIS IS FOR REGISTRING THE MODEL TO DB...
                          // calling User.js one time is enough. multiple calls cause the model to be constituded at every call
require("./models/Tracks")
const express = require("express")
const mongoose = require("mongoose")
const authRoute = require("./route/authRoutes")
const bodyParser = require("body-parser")
const routeAuth = require("./middlewares/routeAuth")
const trackRoutes = require("./route/trackRoutes")


const app = express()
const mongoUri = "mongodb+srv://oguzhan:21312131@cluster0-06uoj.mongodb.net/test?retryWrites=true&w=majority&authSource=admin"
const mongoUri2 = 'mongodb://127.0.0.1:27017'

app.use(bodyParser.json())

mongoose.connect(mongoUri2,{
    useNewUrlParser:true,
    useCreateIndex:true
})

mongoose.connection.on("connected",()=>{
    console.log("you are connected to database...")
})
mongoose.connection.on("error",(err)=>{
    console.log("you are not connected to database :", err )
})

app.use(authRoute)
app.use(trackRoutes)

app.get("/", routeAuth, (req,res)=>{
    
    
    res.send(`Hello ${req.user.email}`)
})

app.listen(3000, ()=>{
    console.log("listening on port 3000")})