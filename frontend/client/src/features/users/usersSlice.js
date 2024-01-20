import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

// local user
let localUser = JSON.parse(localStorage.getItem('user'))

// initial state
const initialState = {
    isLogin: true,
    user: localUser ? localUser : null,
    users: [],
    isLoading: false,
    errors: null,
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

// get all users
export const getAllUsers = createAsyncThunk('users/getAllUsers',async () => {
    try{
        const response = await axios.get('/api/users/get-all-users')
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
            // get all users cases
            // fulfilled case
            .addCase(getAllUsers.fulfilled,(state,action)=>{
                if(action.payload.users){
                    state.users = action.payload.users
                }
            })

            // signup
            // pending case
            .addCase(signup.pending,state=>{
                state.isLoading = true
            })
            // fulfilled case
            .addCase(signup.fulfilled,(state,action)=>{
                state.isLoading = false 
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
            // rejected
            .addCase(signup.rejected,state=>{
                console.log('signup rejected')
            })

            // login
            // pending case
            .addCase(login.pending,state=>{
                state.isLoading = true 
            })
            // fulfilled case
            .addCase(login.fulfilled,(state,action)=>{
                state.isLoading = false
                if(action.payload.user){
                    state.user = action.payload.user 
                    state.errors = null 
                    localStorage.setItem('user',JSON.stringify(action.payload.user))
                }
                if(action.payload.errors){
                    state.user = null 
                    state.errors = action.payload.errors 
                    localStorage.removeItem('user')
                }
            })
            // rejected case
            .addCase(login.rejected,state=>{
                console.log('login rejected')
            })
            // logout
            // fulfilled case
            .addCase(logout.fulfilled,(state,action)=>{
                if(action.payload.message === 'logged out'){
                    state.user = null 
                    localStorage.removeItem('user')
                }
            })
            // rejected case
            .addCase(logout.rejected,state=>{
                console.log('logout rejected')
            })
    },
})

// selectors
// isLogin selector
export const selectIsLogin = state => state.users.isLogin 
// isLoading
export const selectIsLoading = state => state.users.isLoading 
// user
export const selectUser = state => state.users.user
// errors
export const selectErrors = state => state.users.errors
// users
export const selectUsers = state => state.users.users

// actions
export const {
    setIsLogin,
    resetErrors,
} = usersSlice.actions

export default usersSlice.reducer
