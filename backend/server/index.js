require('dotenv').config()
const express = require('express')
const http = require('http')
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
    .catch(err=>{
        console.log('db connection error')
        process.exit(-1)
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

