import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import {io} from 'socket.io-client'

const socket = io('ws://localhost:5000')

// initial state
const initialState = {
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
        const response = await axios.post('/api/posts/new-post',data)
        return response.data
    }catch(err){
        return err.response.data
    }
})

// delete post
export const deleteSinglePost = createAsyncThunk('posts/deleteSinglePost',async _id => {
    try{
        const response = await axios.delete(`/api/posts/delete-post/${_id}`)
        return response.data
    }catch(err){
        return err.response.data
    }
})

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addNewPostToList: (state,action)=>{
            let posts = state.posts 
            let filterdPosts = []
            posts = [action.payload,...posts] 
            posts.forEach(post=>{
                if(!(filterdPosts.some(pst=>pst._id === post._id))){
                    filterdPosts.push(post)
                }
            })
            state.posts = filterdPosts
        },
    },
    extraReducers: builder => {
        builder
            // cases
            // get all posts
            // fulfilled case
            .addCase(getAllPosts.fulfilled,(state,action)=>{
                if(action.payload.posts){
                    state.posts = action.payload.posts
                }
            })
            // new post
            // fulfilled case
            .addCase(addNewPost.fulfilled,(state,action)=>{
                if(action.payload.post){
                    // state.posts = [action.payload.post,...state.posts]
                    socket.emit('addNewPost',action.payload.post)
                }
            })
            // delete post
            // fulfilled case
            .addCase(deleteSinglePost.fulfilled,(state,action)=>{
                if(action.payload._id){
                    state.posts = state.posts.filter(post=>post._id !== action.payload._id)
                }
            })
    }
})

// selectors
// all posts selector
export const selectPosts = state => state.posts.posts 
// actions
export const {
    addNewPostToList,
} = postSlice.actions

export default postSlice.reducer