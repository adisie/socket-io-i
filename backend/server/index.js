require('dotenv').config()
const express = require('express')
const http = require('http')
const socketio = require('socket.io')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')

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
        console.log('CONNECTED')
        server.listen(process.env.PORT,()=>{
            console.log('LISTENING')
        })
    })
    .catch(err=>{
        console.log('connection error')
        process.exit(-1)
    })

const io = socketio(server,{
    cors: {
        origin: ['http://localhost:3000',]
    }
})

// online users
let onlineUsers = []

// add new online users
const addNewOnlineUser = data => {
    if(!(onlineUsers.some(user=>user.userId === data.userId))){
        onlineUsers.push(data)
    }
}

// remove user
const removeUserUserId = userId => {
    onlineUsers = onlineUsers.filter(user => user.userId !== userId)
}

const removeUserSocketId = socketId => {
    onlineUsers = onlineUsers.filter(user => user.socketId !== socketId)
}

// connection
io.on('connection',socket=>{
    socket.on('newUserSignup',data=>{
        io.emit('newUserSignup',data)
    })
    socket.on('addMeToOnline',data=>{
        addNewOnlineUser(data)
        io.emit('onlineUsers',onlineUsers)
    })
    socket.on('removeUser',data=>{
        removeUserUserId(data)
        io.emit('onlineUsers',onlineUsers)
    })
    io.emit('onlineUsers',onlineUsers)
    
    // disconnection
    socket.on('disconnect',()=>{
        removeUserSocketId(socket.id)
        io.emit('onlineUsers',onlineUsers)
    })
})

// routes
// users route
app.use('/api/users',require('./routes/usersRoutes'))
// posts route
app.use('/api/posts/',require('./routes/postsRoutes'))