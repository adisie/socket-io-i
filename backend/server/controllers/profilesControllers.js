const fs = require('fs')

// models
// profile
const Profile = require('../models/profilesModel')
// users
const User = require('../models/usersModel')

// get all users profiles
const getAllUsersProfiles = async (req,res) => {
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
                    },
                }
            },
        ])
        res.status(200).json({profiles})

    }catch(err){
        res.status(400).json({
            error: 'get all users profiles error'
        })
    }
}

// add new profile
const addNewProfile = async (req,res) => {
    try{
        const profile = await Profile.create({
            userId: req.user._id,
            profilePath: req.file.path,
        })
        res.status(200).json({
            profile: {
                _id: profile._id,
                userId: profile.userId,
                profilePath: profile.profilePath,
            }
        })
    }catch(err){
        res.status(400).json({
            error: 'add new profile error'
        })
    }
}

// delete single profiles
const deleteSingleProfile = async (req,res) => {
    try{
        const {_id} = req.params 
        const profile = await Profile.findById(_id)
        if(!profile){
            return res.status(400).json({
                error: 'profile not found',
            })
        }
        
        if(profile.userId.toString() !== req.user._id.toString()){
            return res.status(401).json({
                error: 'can\'t delete other\'t profile'
            })
        }

        if(fs.existsSync(profile.profilePath)){
            fs.unlinkSync(profile.profilePath)
        }

        await profile.deleteOne()
        res.status(200).json({
            message: 'profile deleted successfuly',
            _id,
            userId: req.user._id,
        })
    }catch(err){
        res.status(400).json({
            error: 'delete single post error'
        })
    }
}

module.exports = {
    getAllUsersProfiles,
    addNewProfile,
    deleteSingleProfile,
}