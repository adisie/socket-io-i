import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import {io} from 'socket.io-client'

// socket
const socket = io('ws://localhost:5000')

// initial state
const initialState = {
    isPosting: false,
    posts: [],
}

// get all posts
export const getAllPosts = createAsyncThunk('posts/getAllPosts',async () => {
    try{
        const response = await axios.get('/api/posts/get-all-posts')
        return response.data
    }catch(err){
        return err.response.data
    }
})

// add new post
export const addNewPost = createAsyncThunk('posts/addNewPost',async data => {
    try{
        const response = await axios.post('/api/posts/add-new-post',data)
        return response.data
    }catch(err){
        return err.response.data
    }
})

// delete post
export const deletePost = createAsyncThunk('posts/deletePost',async _id => {
    try{
        const response = await axios.delete(`/api/posts/delete-post/${_id}`)
        return response.data
    }catch(err){
        return err.response.data
    }
})

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addNePostEvent: (state,action) => {
            let posts = state.posts 
            posts.unshift(action.payload)

            let filteredPosts = [] 
            posts.forEach(post => {
                if(!(filteredPosts.some(fp=>fp._id === post._id))){
                    filteredPosts.push(post)
                }
            })
            state.posts = filteredPosts
        },
        // delete post
        deletePostEvent: (state,action) => {
            state.posts = state.posts.filter(post=>post._id !== action.payload)
        },
    },
    extraReducers: builder => {
        builder
            // cases
            // get all posts cases
            // fulfilled case
            .addCase(getAllPosts.fulfilled,(state,action)=>{
                if(action.payload.posts){
                    state.posts = action.payload.posts
                }
            })
            // rejected case
            .addCase(getAllPosts.rejected,state=>{
                console.log('get all posts rejected')
            })
            // add new post cases
            // pending case
            .addCase(addNewPost.pending,state=>{
                state.isPosting = true
            })
            // fulfilled case 
            .addCase(addNewPost.fulfilled,(state,action)=>{
                state.isPosting = false 
                if(action.payload.post){
                    socket.emit('addNewPost',action.payload.post)
                }
            })
            // rejected case
            .addCase(addNewPost.rejected,state=>{
                console.log('add new post rejected')
            })
            // delete post cases
            // fulfilled case
            .addCase(deletePost.fulfilled,(state,action)=>{
                socket.emit('deletePost',action.payload)
            })
            // rejected case
            .addCase(deletePost.rejected,state=>{
                console.log('delete post rejected')
            })
    }
})

// actions
export const {
    addNePostEvent,
    deletePostEvent,
} = postsSlice.actions 

// selectors
// posts
export const selectPosts = state => state.posts.posts 
// isPosting
export const selectIsPosting = state => state.posts.isPosting 

export default postsSlice.reducer