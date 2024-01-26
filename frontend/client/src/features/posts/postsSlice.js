import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

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

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {

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
    }
})

// selectors
// posts
export const selectPosts = state => state.posts.posts

export default postsSlice.reducer
