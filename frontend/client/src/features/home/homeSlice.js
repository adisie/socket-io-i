import {createSlice} from '@reduxjs/toolkit'

// initial state
const initialState = {
    mainDir: "HOME",
}
const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        setMainDir: (state,action) => {
            state.mainDir = action.payload
            // console.log(action)
        }
    }
})

// actions
export const {
    setMainDir,
} = homeSlice.actions

// selector
// mainDir
export const selectMainDir = state => state.home.mainDir

export default homeSlice.reducer