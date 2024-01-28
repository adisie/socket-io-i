import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import {SOCKET} from '../../config'

// local user
const localUser = JSON.parse(localStorage.getItem('user'))
// initial state
const initialState = {
    isLogin: true,
    user: localUser ? localUser : null,
    users: [],
    onlineUsers: [],
    errors: null,
    isUserPending: false,
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

// login
export const login = createAsyncThunk('users/login',async data => {
    try{
        const response = await axios.post('/api/users/login',data)
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

// check-auth
export const checkAuth = createAsyncThunk('users/checkAuth',async () => {
    try{
        const response = await axios.get('/api/users/check-auth')
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

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setIsLogin: (state,action) => {
            state.isLogin = action.payload
        },
        setOnlineUsers: (state,action) => {
            console.log(action.payload)
            state.onlineUsers = action.payload
        }
    },
    extraReducers: builder => {
        builder
            // cases
            ////////////////////////////////////////
            // get all users case
            // get all users fulfilled case
            .addCase(getAllUsers.fulfilled,(state,action)=>{
                if(action.payload.users){
                    state.users = action.payload.users
                }
            })
            // get all users rejected case
            .addCase(getAllUsers.rejected, state => {
                console.log('get all users rejected case')
            })
            ////////////////////////////////////////
            // login cases
            // login pending
            .addCase(login.pending, state => {
                state.isUserPending = true
            })
            // login fulfilled
            .addCase(login.fulfilled,(state,action) => {
                state.isUserPending = false 
                if(action.payload.user){
                    state.user = action.payload.user
                    state.errors = null
                    localStorage.setItem('user',JSON.stringify(action.payload.user))
                    SOCKET.emit('addNewUser',action.payload.user._id)
                }
                if(action.payload.errors){
                    state.errors = action.payload.errors 
                }
            })
            // login rejected
            .addCase(login.rejected, state => {
                state.isUserPending = false 
                console.log('login rejected case')
            })
            ////////////////////////////////////////
            // signup case
            // signup pending
            .addCase(signup.pending, state => {
                state.isUserPending = true 
            })
            // signup fulfilled
            .addCase(signup.fulfilled,(state,action)=>{
                state.isUserPending = false 
                if(action.payload.user){
                    state.user = action.payload.user 
                    state.errors = null
                    localStorage.setItem('user',JSON.stringify(action.payload.user))
                }
                if(action.payload.errors){
                    state.errors = action.payload.errors
                }
            })
            // signup rejected
            .addCase(signup.rejected, state => {
                state.isUserPending = false 
                console.log('signup rejected case')
            })
            ////////////////////////////////////////
            // check-auth
            // fulfilled
            .addCase(checkAuth.fulfilled,(state,action)=>{
                if(action.payload?.error === 'unauthorized'){
                    state.user = null 
                    localStorage.removeItem('user')
                }
            })
            ////////////////////////////////////////
            // logout case
            // logout fulfilled
            .addCase(logout.fulfilled, (state,action) => {
                if(action.payload?.message === "logged out"){
                    let _id = state.user._id
                    state.user = null 
                    state.errors = null 
                    localStorage.removeItem('user')
                    SOCKET.emit('logoutUser',_id)
                }
            })
            // logout rejected
            .addCase(logout.rejected, state => {
                console.log('logout rejected case')
            })
    }
})

// actions
export const {
    setIsLogin,
    setOnlineUsers,
} = usersSlice.actions

// selectors
// users
export const selectUsers = state => state.users.users
// online users
export const selectOnlineUsers = state => state.users.onlineUsers
// isLogin
export const selectIsLogin = state => state.users.isLogin 
// user 
export const selectUser = state => state.users.user
// isUserPending
export const selectIsUserPending = state => state.users.isUserPending
// errors
export const selectErrors = state => state.users.errors

export default usersSlice.reducer