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



// connection
io.on('connection',socket=>{
    socket.on('newUserSignup',data=>{
        io.emit('newUserSignup',data)
    })
})

// routes
// users route
app.use('/api/users',require('./routes/usersRoutes'))