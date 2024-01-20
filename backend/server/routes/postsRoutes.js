const {Router} = require('express')

// controllers
// posts
const {
    getAllPosts,
    addNewPost,
    deletePost,
} = require('../controllers/postsControllers')
// middlewares
// private routes
const {
    privateRoute,
} = require('../middlewares/privateRoutes')

const router = Router()

// get all posts
router.get('/get-all-posts',getAllPosts)

// add new posts
router.post('/add-new-post',privateRoute,addNewPost)

// delete post
router.delete('/delete-post/:_id',privateRoute,deletePost)

module.exports = router