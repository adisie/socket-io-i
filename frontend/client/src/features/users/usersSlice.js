import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

// local user
const localUser = JSON.parse(localStorage.getItem('user'))
// initial state
const initialState = {
    isLogin: true,
    user: localUser ? localUser : null,
    errors: null,
    isPending: false,
    isRejected: false,
}

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
    name: 'users',
    initialState,
    reducers: {
        setIsLogin: (state,action) => {
            state.isLogin = action.payload
        },
        resetErrors: state => {
            state.errors = null
        }
    },
    extraReducers: builder => {
        builder
            // cases
            // signup case
            // signup pending
            .addCase(signup.pending,state => {
                state.isPending = true
            })
            // signup fulfilled
            .addCase(signup.fulfilled,(state,action)=> {
                state.isPending = false 
                if(action.payload.user){
                    state.user = action.payload.user 
                    state.errors = null 
                    localStorage.setItem('user',JSON.stringify(action.payload.user))
                }
                if(action.payload.errors){
                    state.errors = action.payload.errors 
                    state.user = null 
                    localStorage.removeItem('user')
                }
            })
            // login case
            // login pending
            .addCase(login.pending,state => {
                state.isPending = true
            })
            // login fulfilled
            .addCase(login.fulfilled,(state,action)=>{
                state.isPending = false 
                if(action.payload.user){
                    state.user = action.payload.user 
                    localStorage.setItem('user',JSON.stringify(action.payload.user))
                    state.errors = null
                }
                if(action.payload.errors){
                    state.errors = action.payload.errors 
                    state.user = null 
                    localStorage.removeItem('user')
                }
            })
            // login rejected
            .addCase(login.rejected,state=>{
                console.log('Login Rejected Case')
            })
            // check-ath case
            // chech-auth fulfilled
            .addCase(checkAuth.fulfilled,(state,action)=>{
                if(action.payload.error === 'unauthorized'){
                    state.user = null 
                    localStorage.removeItem('user')
                }
            })
            // check-auth rejected
            .addCase(checkAuth.rejected,state => {
                console.log('Check-Auth Rejected Case')
            })
            // logout cases
            // logout fulfilled
            .addCase(logout.fulfilled,(state,action)=>{
                if(action.payload.message === 'logged out'){
                    state.user =  null 
                    state.errors = null 
                    localStorage.removeItem('user')
                }
            })
            // logout rejected
            .addCase(logout.rejected,state => {
                console.log('logout rejected')
            })
    }
})

// actions
export const {
    setIsLogin,
    resetErrors,
} = usersSlice.actions

// selectors
// isLogin
export const selectIsLogin = state => state.users.isLogin 
// isPending
export const selectIsPending = state => state.users.isPending 
// user
export const selectUser = state => state.users.user 
// errors
export const selectErrors = state => state.users.errors

export default usersSlice.reducer