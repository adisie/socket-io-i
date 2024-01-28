import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

// socket
import {SOCKET} from '../../config'

// initial state
const initialState = {
    posts: [],
}

// get all users
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

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addNewPostEvent: (state,action) => {
            let posts = [action.payload,...state.posts]
            let filteredPosts = [] 
            posts.forEach(post=>{
                let isPostExist = filteredPosts.find(fp=>fp._id === post._id)
                if(!isPostExist){
                    filteredPosts.push(post)
                }
            })
            // console.log(filteredPosts)
            state.posts = filteredPosts
        },
        deleteSinglePostEvent: (state,action) => {
            state.posts = state.posts.filter(post=>post._id !== action.payload)
        }
    },
    extraReducers: builder => {
        builder
            ////////////////////////////////////////
            // cases
            // get all posts
            // fulfilled case
            .addCase(getAllPosts.fulfilled,(state,action)=>{
                if(action.payload.posts){
                    state.posts = action.payload.posts
                }
            })
            // rejected case
            .addCase(getAllPosts.rejected,state=>{
                console.log('get all posts rejected case')
            })
            ////////////////////////////////////////
            // add new post
            // fulfilled
            .addCase(addNewPost.fulfilled,(state,action)=>{
                if(action.payload.post){
                    SOCKET.emit('newPostEvent',action.payload.post)
                }
            })
            // rejected
            .addCase(addNewPost.rejected,state => {
                console.log('add new post rejected cases')
            })
            ////////////////////////////////////////
            // delete post
            // fulfilled case
            .addCase(deleteSinglePost.fulfilled,(state,action)=>{
                if(action.payload._id){
                    SOCKET.emit('deleteSinglePostEent',action.payload._id)
                }
            })
            // rejected case
            .addCase(deleteSinglePost.rejected,state=>{
                console.log('delete single post rejected case')
            })
            
    }
})

// actions
export const {
    addNewPostEvent,
    deleteSinglePostEvent,
} = postsSlice.actions

// selectors
// posts
export const selectPosts = state => state.posts.posts

export default postsSlice.reducer
