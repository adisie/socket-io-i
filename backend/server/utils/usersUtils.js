const jwt = require('jsonwebtoken')

// max age
const MAX_AGE = 60 * 60 * 24

// error handler
const errorHandler = err => {
    const errors = {username: '',password: ''}
    // fields required
    if(err.message === 'username required'){
        errors.username = 'username required'
    }
    if(err.message === 'password required'){
        errors.password = 'password required'
    }
    if(err.message === 'incorrect password'){
        errors.password = 'incorrect password'
    }
    if(err.message === 'username not exist'){
        errors.username = 'username not exist'
    }
    // duplicate key
    if(err.code === 11000){
        if(err.message.includes('username')){
            errors.username = 'username already exist'
        }
    }
    // user validation
    if(err.message.includes('User validation failed')){
        Object.values(err.errors).forEach(({properties})=>{
            errors[properties.path] = properties.message
        })
    }
    return errors
}

// generate token
const generateToken = _id => {
    return jwt.sign({_id},process.env.JWT_SECRET,{expiresIn: MAX_AGE})
}


module.exports = {
    MAX_AGE,
    errorHandler,
    generateToken,
}