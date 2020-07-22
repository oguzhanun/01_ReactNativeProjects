const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

userSchema.pre("save", function(next){
    const user = this
    if(!user.isModified("password")){
        return next()
    }
    bcrypt.genSalt(10, (err, salt)=>{
        if(err){
            return next()
        }
        bcrypt.hash(user.password,salt,(err, encrypted)=>{
            if(err){
                return next()
            }
            user.password = encrypted
            next()
        })
    })
})

userSchema.methods.compare = function(candidatePassword){
    const user = this
    
    return new Promise((resolve,reject)=>{
        bcrypt.compare(candidatePassword,user.password, (err, isMatch)=>{
            if(err){
                return reject(err)
            }
            if(!isMatch){
                return reject(false)
            }
            resolve(true) // this function makes the return by itself... ıt is not necessary to return sth 
                          // within the Promise function...
        })
    })
}

const userModel = mongoose.model("User", userSchema)