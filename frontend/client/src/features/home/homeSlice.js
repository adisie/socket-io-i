import {createSlice} from '@reduxjs/toolkit'

// initial state
const initialState = {
    mainDir: 'HOME',
    userId: null,
}

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        setMainDir: (state,action) => {
            state.mainDir = action.payload
        },
        setUserId: (state,action) => {
            state.userId = action.payload
        },
    }
})

// actions
export const {
    setMainDir,
    setUserId,
} = homeSlice.actions

// selectors
// mainDir selector
export const selectMainDir = state => state.home.mainDir 
// userId
export const selectUserId = state => state.home.userId 

export default homeSlice.reducer