import {createSlice} from '@reduxjs/toolkit'


// initial state
const initialState = {
    onlineUsers: [],
    messages: [],
}

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        addNewUser: (state,action) => {
            state.onlineUsers = [action.payload,...state.onlineUsers]
        },
        addNewMessage: (state,action) => {
            state.messages = [action.payload,...state.messages]
            console.log(action.payload)
        }
    },
    extraReducers: build => {

    },
})

export const {
    addNewUser,
    addNewMessage,
} = postSlice.actions

export const selectOnlineUsers = state => state.post.onlineUsers
export const selectMessages = state => state.post.messages

export default postSlice.reducer