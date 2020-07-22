const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")


const User = mongoose.model("User")

const routeAuth = (req, res, next)=>{
    const {authorization} =req.headers

    if(!authorization){
        return res.status(401).send({error:"please authenticate...!!!"})
    }

    const token = authorization.replace("Bearer ", "")
    jwt.verify(token, "THE_SECRET_KEY", async (err, payload)=>{
        if(err){
            return res.status(401).send("please authenticate", err.message)
        }
        const userId = payload.userId

        const user = await User.findById(userId)
        req.user = user
        console.log(user.email)
        next()
    })
    // next() komutu burada iken verify skobundan çıkıldığı için req parametresine req.user ile yapılan atama
    // middleware den çıkıp asıl req değişkenine girmiyor. dolayısı ile next() fonksiyonu jwt.verify fonksiyonu 
    // içinde çağrılmak zorundadır...
}

module.exports = routeAuth