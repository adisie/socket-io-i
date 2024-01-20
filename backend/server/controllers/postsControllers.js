// models
// posts
const Post = require('../models/postsModel')

// get all post
const getAllPosts = async (req,res) => {
    try{
        const posts = await Post.find().select({
            _id: 1,
            authorId: 1,
            text: 1,
            createdAt: 1,
        }).sort({createdAt: -1})
        res.status(200).json({posts})
    }catch(err){
        res.status(400).json({
            error: 'get all post error'
        })
    }
}

// add new post
const addNewPost = async (req,res) => {
    try{
        const {text} = req.body 
        const authorId = req.user._id 
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

// delete post
const deletePost = async (req,res) => {
    try{
        const _id = req.params._id 
        const post = await Post.findById(_id) 
        if(!post){
            return res.status(400).json({
                error: 'post not found'
            })
        }
        if(post.authorId.toString() !== req.user._id.toString()){
            return res.status(401).json({
                error: 'unauthorized to delete other\'s post'
            })
        }
        await post.deleteOne()
        res.status(200).json({
            message: 'post deleted',
            _id,
        })
    }catch(err){
        res.status(400).json({
            error: 'delete post error'
        })
    }
}

module.exports = {
    getAllPosts,
    addNewPost,
    deletePost,
}