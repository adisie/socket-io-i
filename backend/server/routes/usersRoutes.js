const {Router} = require('express')


// controllers
// users
const {
    signup,
    login,
    logout,
    checkAuth,
    getAllUsers,
    getProfiles,
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

// check-auth
router.get('/check-auth',privateRoute,checkAuth)

// get all users
router.get('/get-all-users',getAllUsers)

// get profiles
router.get('/get-profiles',getProfiles)

module.exports = router
