require('dotenv').config()
const express = require('express')
const http = require('http')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')

const app = express()
// settings
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

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

// routes
// usersRoutes
app.use('/api/users',require('./routes/usersRoutes'))
// postsRoutes
app.use('/api/posts',require('./routes/postsRoutes'))
