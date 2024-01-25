import {createSlice} from '@reduxjs/toolkit'

// initial state
const initialState = {
    isLogin: true,
    isUserPending: false,
}

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setIsLogin: (state,action) => {
            state.isLogin = action.payload
        }
    }
})

// actions
export const {
    setIsLogin,
} = usersSlice.actions

// selectors
// isLogin
export const selectIsLogin = state => state.users.isLogin 
// isUserPending
export const selectIsUserPending = state => state.users.isUserPending

export default usersSlice.reducer