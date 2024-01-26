const mongoose = require('mongoose')

const profilesSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    profilePath: {
        type: String,
    },
},{
    timestamps: true,
})

module.exports = mongoose.model('Profile',profilesSchema)