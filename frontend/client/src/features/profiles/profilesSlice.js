import {createSlice} from '@reduxjs/toolkit'


// initial state
const initialState = {
    profileDir: 'MY-POSTS',
}
const profilesSlice = createSlice({
    name: 'profiles',
    initialState,
    reducers: {
        setProfileDir: (state,action) => {
            state.profileDir = action.payload
        },
    },
})

// actions
export const {
    setProfileDir,
} = profilesSlice.actions

// selectors
export const selectProfileDir = state => state.profiles.profileDir

export default profilesSlice.reducer