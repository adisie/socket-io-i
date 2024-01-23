const jwt = require('jsonwebtoken')

// models
// users
const User = require('../models/usersModel')

// const private route
const privateRoute = async (req,res,next) => {
    try{
        const token = req.cookies.token 
        if(!token){
            return res.status(401).json({
                error: 'unauthorized'
            })
        }
        const decodedToken = jwt.verify(token,process.env.JWT_SECRET)
        if(!decodedToken){
            return res.status(401).json({
                error: 'unauthorized'
            })
        }
        const user = await User.findById(decodedToken._id) 
        if(!user){
            return res.status(401).json({
                error: 'unauthorized'
            })
        }
        req.user = {
            _id: user._id,
            username: user.username,
        }
        next()
    }catch(err){
        console.log(err)
        res.status(401).json({
            error: 'unauthorized'
        })
    }
}

module.exports = {
    privateRoute,
}