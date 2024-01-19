import {createSlice} from '@reduxjs/toolkit'

// initial state
const initialState = {
    isLogin: true,
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setIsLogin: (state,action) => {
            state.isLogin = action.payload
        }
    },
    extraReducers: builder => {

    },
})

// selectors
// isLogin selector
export const selectIsLogin = state => state.users.isLogin 

// actions
export const {
    setIsLogin,
} = usersSlice.actions

export default usersSlice.reducer
