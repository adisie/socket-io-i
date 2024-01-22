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

// db connection
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log('CONNECTED')
        server.listen(process.env.PORT,()=>{
            console.log('LISTENING')
        })
    })
    .catch(()=>{
        console.log('CONNECTION ERROR')
        process.exit(-1)
    })

// connection
const io = socketio(server,{
    cors: {
        origin: ['http://localhost:3000',]
    }
})

// online users
let allOnlineUsers = []

// add online user
const addNewOnlineUser = data => {
    if(!(allOnlineUsers.some(user=>user.userId === data.userId))){
        allOnlineUsers.push(data)
    }
    let index = allOnlineUsers.findIndex(user=>user.userId === data.userId)
    allOnlineUsers[index] = data
}

// remove user on logout
const removeUserOnLogout = userId =>{
    allOnlineUsers = allOnlineUsers.filter(user=>user.userId !== userId)
}

// remove user on disconnect
const removeUserOnDisconnect = socketId => {
    allOnlineUsers = allOnlineUsers.filter(user=>user.socketId !== socketId)
}

// listening
io.on('connection',socket=>{
    // new post evenet
    socket.on('addNewPost',data=>{
        socket.broadcast.emit('getNewPost',data)
    })
    // delete post
    socket.on('deletePost',data=>{
        socket.broadcast.emit('deletePost',data)
    })
    // login user
    socket.on('loginUser',data=>{
        addNewOnlineUser(data)
        // emit online users
        io.emit('allOnlineUsers',allOnlineUsers)
    })
    // get user on refres
    socket.on('getUserOnRefresh',userId=>{
        addNewOnlineUser({userId,socketId: socket.id})
        io.emit('sendOnlineUsersOnRefresh',allOnlineUsers)
    })
    // get online users on refresh
    socket.on('getOnlineUsersOnRefresh',()=>{
        io.emit('getAllOnlineUsersOnRefresh',allOnlineUsers)
    })
    // remove user on logout
    socket.on('removeUserOnLogout',data=>{
        removeUserOnLogout(data)
        io.emit('sendOnlineUsersOnRefresh',allOnlineUsers)
    })
    // diconnect
    socket.on('disconnect',()=>{
        removeUserOnDisconnect(socket.id)
        io.emit('sendOnlineUsersOnRefresh',allOnlineUsers)
    })
})


// routes
// users route
app.use('/api/users',require('./routes/usersRoutes'))
// posts
app.use('/api/posts',require('./routes/postsRoutes'))
