import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

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

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {

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
    }
})

// selectors
// all posts selector
export const selectPosts = state => state.posts.posts 

export default postSlice.reducer