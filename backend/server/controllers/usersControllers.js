

// signup
const signup = (req,res) => {
    res.status(200).json("SINGUP")
}

// login
const login = (req,res) => {
    res.status(200).json('LOGIN')
}

// logout
const logout = (req,res) => {
    res.status(200).json("LOGOUT")
}

// check-auth
const checkAuth = (req,res) => {
    res.status(200).json('CHECK-AUTH')
}

// get all users
const getAllAuthors = (req,res) => {
    res.status(200).json('GET-ALL-AUTHORS')
}

module.exports = {
    signup,
    login,
    logout,
    checkAuth,
    getAllAuthors,
}