const {Router} = require('express')

// controllers
const {
    getAllPost,
    addNewPost,
    deleteSinglePost,
} = require('../controllers/postsControllers')

// middlewares
const {
    privateRoutes,
} = require('../middlewares/privateRoutes')

const router = Router()

// get all posts
router.get('/get-all-posts',getAllPost)

// add new post
router.post('/add-new-post',privateRoutes,addNewPost)

// delete single post
router.delete('/delete-single-post/:_id',privateRoutes,deleteSinglePost)

module.exports = router