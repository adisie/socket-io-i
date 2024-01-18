import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import {io} from 'socket.io-client'

let socket = io('ws://localhost:5000')

// local user
const localUser = JSON.parse(localStorage.getItem('user'))
// initial state
const initialState = {
    isLogin: true,
    allUsers: [],
    allOnlineUsers: [],
    user: localUser ? localUser : null,
    errors: null,
}

// get all users
export const getAllUsers = createAsyncThunk('users/getAllUsers',async () => {
    try{
        const response = await axios.get('/api/users/get-all-users')
        return response.data
    }catch(err){
        return err.response.data
    }
})
// signup
export const signup = createAsyncThunk('users/signup',async data => {
    try{
        const response = await axios.post('/api/users/signup',data)
        return response.data
    }catch(err){
        return err.response.data
    }
})
// login
export const login = createAsyncThunk('users/login',async data => {
    try{
        const response = await axios.post('/api/users/login',data)
        return response.data
    }catch(err){
        return err.response.data
    }
})

// logout
export const logout = createAsyncThunk('users/logout',async () => {
    try{
        const response = await axios.get('/api/users/logout')
        return response.data
    }catch(err){
        return err.response.data
    }
})

// check auth
export const checkAuth = createAsyncThunk('users/checkAuth',async () => {
    try{
        const response = await axios.get('/api/users/check-auth')
        return response.data
    }catch(err){
        return err.response.data
    }
})

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setIsLogin: (state,action) => {
            state.isLogin = action.payload
        },
        addNewSignupUser: (state,action) => {
            let users = state.allUsers 
            if(!(users.some(user=>user._id === action.payload._id))){
                state.allUsers = [action.payload,...users]
            }
        },
        setAllOnlineUsers: (state,action) => {
            state.allOnlineUsers = action.payload
        }
    },
    extraReducers: builder => {
        builder
            // cases
            // get all users
            // fulfilled 
            .addCase(getAllUsers.fulfilled,(state,action)=>{
                if(action.payload.users){
                    state.allUsers = action.payload.users
                }
            })
            // signup
            // fulfilled
            .addCase(signup.fulfilled,(state,action)=>{
                if(action.payload.user){
                    state.user = action.payload.user 
                    state.allUsers = [action.payload.user,...state.allUsers]
                    state.errors = null 
                    localStorage.setItem('user',JSON.stringify(action.payload.user))
                    socket.emit('newUserSignup',action.payload.user)
                }
                if(action.payload.errors){
                    state.errors = action.payload.errors 
                    state.user = null 
                    localStorage.removeItem('user')
                }
            })
            // login case
            // fulfilled case
            .addCase(login.fulfilled,(state,action)=>{
                if(action.payload.user){
                    state.user = action.payload.user 
                    state.errors = null 
                    localStorage.setItem('user',JSON.stringify(action.payload.user))
                    socket.emit('addMeToOnline',{userId: action.payload.user._id,socketId: socket.id})
                }
                if(action.payload.errors){
                    state.user = null 
                    state.errors = action.payload.errors 
                    localStorage.removeItem('user')
                }
            })
            // logout 
            // fulfilled 
            .addCase(logout.fulfilled,(state,action)=>{
                if(action.payload?.message === 'logged out'){
                    socket.emit('removeUser',state.user?._id)
                    state.user = null 
                    state.errors = null
                    localStorage.removeItem('user')
                }
            })
            // check auth
            // fulfilled
            .addCase(checkAuth.fulfilled,(state,action)=>{
                if(action.payload?.error === 'unauthorized'){
                    state.user = null 
                    state.errors = null 
                    localStorage.removeItem('user')
                }
            })
    },
})

// actions
export const {
    setIsLogin,
    addNewSignupUser,
    setAllOnlineUsers,
} = usersSlice.actions

// selectors
// isLogin selector
export const selectIsLogin = state => state.users.isLogin 
// user selector
export const selectUser = state => state.users.user 
// errors selector
export const selectErrors = state => state.users.errors 
// all users selector
export const selectAllUsers = state => state.users.allUsers 
// all online users selector
export const selectAllOnlineUsers = state => state.users.allOnlineUsers

export default usersSlice.reducer
