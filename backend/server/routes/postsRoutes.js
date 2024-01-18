const {Router} = require('express')

// controllers
// posts controllers
const {
    getAllPosts,
    addNewPost,
    deleteSinglePost,
} = require('../controllers/postsControllers')

// middlewares
// private routes
const {
    privateRoute,
} = require('../middlewares/privateRoutes')

const router = Router()

// get all posts
router.get('/get-all-posts',getAllPosts)

// new post
router.post('/new-post',privateRoute,addNewPost)

// delete post
router.delete('/delete-post/:_id',privateRoute,deleteSinglePost)

module.exports = router