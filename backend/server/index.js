require('dotenv').config()

const express = require('express')
const http = require('http')
const socketio = require('socket.io')
const cors = require('cors')

const app = express()

// settings
app.use(cors({
    origin: ['http://localhost:3000',],
    credentials: true,
}))
const server = http.createServer(app)

const io = socketio(server,{
    cors: {
        origin: ['http://localhost:3000',]
    }
})

io.on('connection',socket=>{
    socket.on('newMessage',text=>{
        io.emit('getNewMessage',text)
    })
})

server.listen(process.env.PORT,()=>{
    console.log('LISTENING')
})

