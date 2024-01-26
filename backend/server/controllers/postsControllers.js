
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
const deleteSinglePost = async (req,res) => {
    try{
        const {_id} = req.params 
        const post = await Post.findById(_id) 
        if(!post){
            return res.status(400).json({
                error: 'post not found error'
            })
        }
        if(post.authorId.toString() !== req.user._id.toString()){
            return res.status(400).json({
                error: 'can\'t delete others post'
            })
        }
        await post.deleteOne()
        res.status(200).json({
            message: 'post deleted',
            _id,
        })
    }catch(err){
        res.status(400).json({
            error: 'delete single post error'
        })
    }
}

module.exports = {
    getAllPost,
    addNewPost,
    deleteSinglePost,
}