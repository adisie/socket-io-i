import {createSlice} from '@reduxjs/toolkit'

// initial state
const initialState = {
    mainDir: 'HOME',
}

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        setMainDir: (state,action) => {
            state.mainDir = action.payload
        }
    }
})

// actions
export const {
    setMainDir,
} = homeSlice.actions

// selectors
// mainDir selector
export const selectMainDir = state => state.home.mainDir 

export default homeSlice.reducer