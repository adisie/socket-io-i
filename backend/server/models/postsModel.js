const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    text: {
        type: String,
    },
},{
    timestamps: true,
})

module.exports = mongoose.model('Post',postSchema)