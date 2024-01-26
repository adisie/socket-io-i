
// models
// posts
const Post = require('../models/postsModel')

// get all posts
const getAllPost = async (req,res) => {
    try{
        const posts = await Post.find().select({
            _id: 1,
            authorId: 1,
            text: 1,
            createdAt: 1,
        }).sort({
            createdAt: -1
        })
        res.status(200).json({posts})
    }catch(err){
        res.status(400).json({
            error: 'get all post errors'
        })
    }
}

// add new post
const addNewPost = async (req,res) => {
    try{
        const authorId = req.user._id 
        const text = req.body.text 
        const post = await Post.create({authorId,text})
        res.status(200).json({
            post: {
                _id: post._id,
                authorId: post.authorId,
                text: post.text,
                createdAt: post.createdAt,
            }
        })
    }catch(err){
        res.status(400).json({
            error: 'add new post error'
        })
    }
}

// delete single post
const deleteSinglePost = (req,res) => {
    res.status(200).json('delete single post')
}

module.exports = {
    getAllPost,
    addNewPost,
    deleteSinglePost,
}