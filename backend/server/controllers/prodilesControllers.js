const fs = require('fs')

// models
// profiles
const Profile = require('../models/profilesModel')

// add new profile
const addNewProfile = async (req,res) => {
    try{
        const profile = await Profile.create({
            userId: req.user._id,
            profilePath: req.file.path,
        })
        res.status(200).json({
            newProfile: {
                _id: profile._id,
                userId: profile.userId,
                profilePath: profile.profilePath,
                createdAt: profile.createdAt,
            }
        })
    }catch(err){
        res.status(400).json({
            error: 'add new profile error'
        })
    }
}

// delete profile
const deleteProfile = async (req,res) => {
    try{
        const _id = req.params._id 
        const profile = await Profile.findById(_id) 
        if(!profile) {
            return res.status(400).json({
                error: 'profile not found'
            })
        }
        if(profile.userId.toString() !== req.user._id.toString()){
            return res.status(401).json({
                error: 'unauthorized to delete'
            })
        }
        if(fs.existsSync(profile.profilePath)){
            fs.unlinkSync(profile.profilePath)
        }
        await profile.deleteOne()
        res.status(200).json({
            message: 'profile deleted',
            _id,
        })
    }catch(err){
        res.status(400).json({
            error: 'delete profile error'
        })
    }
}

module.exports = {
    addNewProfile,
    deleteProfile,
}