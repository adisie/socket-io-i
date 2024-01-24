import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import {io} from 'socket.io-client'

// initial state
const initialState = {
    posts: [],
    isPostPending: false,
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

// delete single post
export const deleteSinglePost = createAsyncThunk('posts/deleteSinglePost',async _id => {
    try{
        const response = await axios.delete(`/api/posts/delete-single-post/${_id}`)
        return response.data
    }catch(err){
        return err.response.data
    }
})

// socket
const socket = io('ws://localhost:5000')

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addNewPostEvent: (state,action) => {
            let posts = [] 
            posts = [action.payload,...state.posts] 
            
            let finalPosts = [] 

            posts.forEach(post=>{
                if(!(finalPosts.some(fpost=>fpost._id === post._id))){
                    finalPosts.push(post)
                }
            })
            state.posts = finalPosts
        },
        removeDeletedSinglePost: (state,action) => {
            state.posts = state.posts.filter(post=>post._id !== action.payload)
        },
    },
    extraReducers: builder => {
        builder 
            // cases
            // get all posts
            // fulfilled
            .addCase(getAllPosts.fulfilled,(state,action)=>{
                if(action.payload.posts){
                    state.posts = action.payload.posts
                }
            })
            // rejected
            .addCase(getAllPosts.rejected,state=>{
                console.log('Get All Posts Rejected Case')
            })
            // add new post
            // pending
            .addCase(addNewPost.pending,state=>{
                state.isPostPending = true
            })
            // fulfilled
            .addCase(addNewPost.fulfilled,(state,action)=>{
                state.isPostPending = false
                socket.emit('newIncomminPost',action.payload.newPost)
            })
            // rejected
            .addCase(addNewPost.rejected,state=>{
                state.isPostPending = false 
                console.log('Add New Post Rejected')
            })
            // delete single post
            // fulfilled case
            .addCase(deleteSinglePost.fulfilled,(state,action)=>{
                console.log(action.payload)
                if(action.payload._id){
                    socket.emit('deleteSinglePost',action.payload._id)
                }
            })
            // rejected case
            .addCase(deleteSinglePost.rejected,state=>{
                console.log('Delete Single Post Rejected')
            })
    }
})

// actions
export const {
    addNewPostEvent,
    removeDeletedSinglePost,
} = postsSlice.actions

// selectors
// posts
export const selectPosts = state => state.posts.posts
// isPostPending
export const selectIsPostPending = state => state.posts.isPostPending 

export default postsSlice.reducer
