import {createSlice} from '@reduxjs/toolkit'

// initial state
const initialState = {
    isLogin: true,
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

export default usersSlice.reducer