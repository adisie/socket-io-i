const bcryptjs = require('bcryptjs')

// models
// users
const User = require('../models/usersModel')

// utils
const {
    MAX_AGE,
    errorHandler,
    generateToken,
} = require('../utils/usersUtils')

// signup
const signup = async (req,res) => {
    try{
        const {username,password} = req.body 
        const user = await User.create({username,password})
        // generate token
        const token = generateToken(user._id)
        // cookie
        res.cookie('token',token,{
            httpOnly: true,
            sameSite: 'lax',
            secure: true,
            maxAge: MAX_AGE * 1000,
        })
        res.status(200).json({
            user: {
                _id: user._id,
                username: user.username,
            }
        })
    }catch(err){
        const errors = errorHandler(err)
        res.status(400).json({errors})
    }
}

// login
const login = async (req,res) => {
    try{
        const {username,password} = req.body 
        if(!username?.trim()){
            throw new Error('username required')
        }
        if(!password){
            throw new Error('password required')
        }
        const user = await User.findOne({username})
        if(!user){
            throw new Error('username not exist')
        }
        const isPasswordMatch = bcryptjs.compareSync(password,user.password) 
        if(!isPasswordMatch){
            throw new Error('incorrect password')
        }
        // generate token
        const token = generateToken(user._id)
        // cookie
        res.cookie('token',token,{
            httpOnly: true,
            sameSite: 'lax',
            secure: true,
            maxAge: MAX_AGE * 1000,
        })
        res.status(200).json({
            user: {
                _id: user._id,
                username: user.username,
            }
        })
    }catch(err){
        const errors = errorHandler(err) 
        res.status(400).json({errors})
    }
}

// logout
const logout = (req,res) => {
    try{
        res.cookie('token','',{maxAge: 1})
        res.status(200).json({
            message: 'logged out'
        })
    }catch(err){
        res.status(400).json({
            error: 'logout error'
        })
    }
}

// check - auth
const checkAuth = (req,res) => {
    try{
        res.status(200).json({
            message: 'authorized',
            user: req.user,
        })
    }catch(err){
        res.status(400).json({
            error: 'check-auth error'
        })
    }
}

// get all users
const getAllUsers = async (req,res) => {
    try{
        const users = await User.find().select({
            _id: 1,
            username: 1,
        }).sort({
            username: 1,
        })
        res.status(200).json({users})
    }catch(err){
        res.status(400).json({
            error: 'get all users error'
        })
    }
}

// get profiles
const getProfiles = async (req,res) => {
    try{
        const profiles = await User.aggregate([
            {
                $lookup: {
                    from: 'profiles',
                    localField: '_id',
                    foreignField: 'userId',
                    as: 'profiles'
                },
            },
            {
                $project: {
                    _id: 1,
                    profiles: {
                        _id: 1,
                        profilePath: 1,
                        createdAt: 1,
                    }
                }
            }
        ])
        res.status(200).json({profiles})
    }catch(err){
        res.status(400).json({
            error: 'get profiles error'
        })
    }
}

module.exports = {
    signup,
    login,
    logout,
    checkAuth,
    getAllUsers,
    getProfiles,
}