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


let allCurrentOnlineUsers = [] 

// add new online user
const addNewOnlineUser = data => {
    let isUserExist = allCurrentOnlineUsers.find(user=>user.userId === data.userId)
    if(isUserExist){
        let index = allCurrentOnlineUsers.findIndex(user=>user.userId === data.userId)
        allCurrentOnlineUsers[index] = data
    }else{
        allCurrentOnlineUsers.push(data)
    }
}

// remove user on logout ussing userId
const removeUserOnLogout = userId => {
    allCurrentOnlineUsers = allCurrentOnlineUsers.filter(user => user.userId !== userId)
}

// remove user on browser exist
const removeUserOnDisconnect = socketId => {
    allCurrentOnlineUsers = allCurrentOnlineUsers.filter(user => user.socketId !== socketId)
}

// connection
io.on('connection',socket => {
    // users
    // add new user event
    socket.on('addNewUser',data=>{
        addNewOnlineUser({userId: data,socketId: socket.id})
        io.emit('allCurrentOnlineUsers',allCurrentOnlineUsers)
    })
    // add user on reconnect
    socket.on('addUserOnReconnect',data=>{
        addNewOnlineUser({userId: data,socketId: socket.id})
        io.emit('allCurrentOnlineUsers',allCurrentOnlineUsers)
    })
    // remove user on logout
    socket.on('logoutUser',data=>{
        removeUserOnLogout(data)
        io.emit('allCurrentOnlineUsers',allCurrentOnlineUsers)
    })
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

    // disconnect
    socket.on('disconnect',()=>{
        removeUserOnDisconnect(socket.id)
        io.emit('allCurrentOnlineUsers',allCurrentOnlineUsers)
    })

    // emit all online users
    io.emit('getAllOnlineUsers',allCurrentOnlineUsers)
})

// routes
// usersRoutes
app.use('/api/users',require('./routes/usersRoutes'))
// postsRoutes
app.use('/api/posts',require('./routes/postsRoutes'))
// profiles
app.use('/api/profiles',require('./routes/profilesRoutes'))
app.use('/public',express.static('./public'))
