const multer = require('multer')
const fs = require('fs')

// create folder
const createFolder = req => {
    let path = `./public/uploads/profiles/${req.user.username}`
    if(!fs.existsSync(path)){
        fs.mkdirSync(path,{recursive: true})
    }
    return path
}

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,createFolder(req))
    },
    filename: (req,file,cb) => {
        cb(null,`${Date.now()}-${file.originalname}`)
    },
})
const profileUpload = multer({storage})


module.exports = {
    profileUpload,
}