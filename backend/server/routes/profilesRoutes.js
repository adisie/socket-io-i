const {Router} = require('express')

// controllers
// profiles
const {
    getAllUsersProfiles,
    addNewProfile,
    deleteSingleProfile,
} = require('../controllers/profilesControllers')

// middlewares
// private routes
const {
    privateRoutes,
} = require('../middlewares/privateRoutes')
// fileupload
const {
    profileUpload,
} = require('../middlewares/fileUploads')

const router = Router()

// get all users profiles
router.get('/get-all-users-profiles',getAllUsersProfiles)

// add new profile
router.post('/add-new-profile',privateRoutes,profileUpload.single('profile'),addNewProfile)

// delete profile
router.delete('/delete-single-profile/:_id',privateRoutes,deleteSingleProfile)


module.exports = router