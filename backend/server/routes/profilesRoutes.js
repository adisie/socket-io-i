const {Router} = require('express')

// controllers
const {
    addNewProfile,
    deleteProfile,
} = require('../controllers/prodilesControllers')

// middlewares
// private routes
const {
    privateRoute,
} = require('../middlewares/privateRoutes')
// upload profile
const {
    profileUpload,
} = require('../middlewares/uploadProfiles')

const router = Router()


// add new profile
router.post('/add-new-profile',privateRoute,profileUpload.single('profile'),addNewProfile)

// delete profile
router.delete('/delete-profile/:_id',privateRoute,deleteProfile)


module.exports = router