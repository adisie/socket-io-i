const {Router} = require('express')

// controllers
// users controllers
const {
    signup,
    login,
    logout,
    checkAuth,
    getAllUsers,
} = require('../controllers/usersControllers')
// middlewares
// private routes
const {
    privateRoute,
} = require('../middlewares/privateRoutes')

const router = Router()

// signup
router.post('/signup',signup)

// login
router.post('/login',login)

// logout
router.get('/logout',logout)

// check
router.get('/check-auth',privateRoute,checkAuth)

// get all users
router.get('/get-all-users',getAllUsers)

module.exports = router