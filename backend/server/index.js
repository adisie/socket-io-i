require('dotenv').config()
const express = require('express')
const http = require('http')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const socketion = require('socket.io')

const app = express()

// settings
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use(cors({
    origin: ['http://localhost:3000','http://192.168.1.8:3000',],
    credentials: true,
}))

const server = http.createServer(app)

// db connection
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log('CONNECTED')
        server.listen(process.env.PORT,()=>{
            console.log('LISTENING')
        })
    })
    .catch(err=>{
        console.log('db connection error')
        process.exit(-1)
    })

const io = socketion(server,{
    cors: {
        origin: ['http://localhost:3000','http://192.168.1.8:3000',],
    }
})

// listening for connection
io.on('connection',socket=>{
    
    // new post evente
    socket.on('newIncomminPost',data=>{
        // send back the new post
        io.emit('sendBackNewPost',data)
    })

    // delete single post event
    socket.on('deleteSinglePost',data=>{
        io.emit('removeDeletedSinglePost',data)
    })

    // new profile from frontend
    socket.on('newProfileImageAdded',data => {
        io.emit('newProfileImageFromServer',data)
    })

    // delete profile event
    socket.on('deleteProfileEvenet',data=>{
        io.emit('deleteProfielEventFromServer',data)
    })
})

// routes
// users
app.use('/api/users',require('./routes/usersRoutes'))
// profiles
app.use('/api/profiles',require('./routes/profilesRoutes'))
// posts
app.use('/api/posts',require('./routes/postsRoutes'))
// public
app.use('/public',express.static('public'))

