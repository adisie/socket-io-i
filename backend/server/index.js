require('dotenv').config()
const express = require('express')
const http = require('http')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const socketio = require('socket.io')

const app = express()
// settings
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use(cors({
    origin: ['http://localhost:3000',],
    credentials: true,
}))

const server = http.createServer(app)

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("CONNECTED")
    server.listen(process.env.PORT,()=>{
        console.log("LISTENING")
    })
})
.catch(err=>{
    console.log('DB CONNECTION FAILED')
    process.exit(-1)
})

// io
const io = socketio(server,{
    cors: {
        origin: ['http://localhost:3000',]
    }
})

// connection
io.on('connection',socket => {
    // posts
    // listen new post event
    socket.on('newPostEvent',data=>{
        io.emit('addNewPostEvent',data)
    })
    // listen for delete single post event
    socket.on('deleteSinglePostEent',data=>{
        io.emit('removeDeletedPostEvent',data)
    })

    // profiles
    // listen for addNewUserProfileEvent 
    socket.on('addNewUserProfileEvent',data=>{
        io.emit('addProfileToListEvent',data)
    })
    // listen for delete profile event
    socket.on('deleteProfileEvent',data=>{
        io.emit('reomoveDeletedProfileFromList',data)
    })
})

// routes
// usersRoutes
app.use('/api/users',require('./routes/usersRoutes'))
// postsRoutes
app.use('/api/posts',require('./routes/postsRoutes'))
// profiles
app.use('/api/profiles',require('./routes/profilesRoutes'))
app.use('/public',express.static('./public'))
