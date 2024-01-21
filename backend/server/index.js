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
})

// routes
// users route
app.use('/api/users',require('./routes/usersRoutes'))
// posts
app.use('/api/posts',require('./routes/postsRoutes'))
