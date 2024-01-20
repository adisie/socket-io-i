require('dotenv').config()
const express = require('express')
const http = require('http')
const socketio = require('socket.io')
const mongoose = require('mongoose')

const app = express()
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


// routes
// users route
app.use('/api/users',require('./routes/usersRoutes'))
