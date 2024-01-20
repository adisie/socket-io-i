import { createSlice,createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

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
                console.log(action.payload)
            })
            // rejected case
            .addCase(addNewPost.rejected,state=>{
                console.log('add new post rejected')
            })
            // delete post cases
            // fulfilled case
            .addCase(deletePost.fulfilled,(state,action)=>{
                console.log(action.payload)
            })
            // rejected case
            .addCase(deletePost.rejected,state=>{
                console.log('delete post rejected')
            })
    }
})

// selectors
// posts
export const selectPosts = state => state.posts.posts 
// isPosting
export const selectIsPosting = state => state.posts.isPosting 

export default postsSlice.reducer