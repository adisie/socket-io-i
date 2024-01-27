import {createSlice} from '@reduxjs/toolkit'

// initial state
const initialState = {
    mainDir: "HOME",
    userIdProfiles: null,
}
const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        setMainDir: (state,action) => {
            state.mainDir = action.payload
            // console.log(action)
        },
        setUserIdProfiles: (state,action) => {
            state.userIdProfiles = action.payload
        },
    }
})

// actions
export const {
    setMainDir,
    setUserIdProfiles,
} = homeSlice.actions

// selector
// mainDir
export const selectMainDir = state => state.home.mainDir
// userIdProfiles
export const selectUserIdProfiles = state => state.home.userIdProfiles 

export default homeSlice.reducer