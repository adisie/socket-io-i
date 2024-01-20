const {Router} = require('express')

// controllers
// users
const {
    signup,
    login,
    logout,
    checkAuth,
    getAllAuthors,
} = require('../controllers/usersControllers')

const router = Router()

// signup
router.post('/signup',signup)

// login
router.post('/login',login)

// logout
router.get('/logout',login)

// check-auth
router.get('/check-auth',checkAuth)

// get - all users
router.get('/get-all-authors',getAllAuthors)

module.exports = router