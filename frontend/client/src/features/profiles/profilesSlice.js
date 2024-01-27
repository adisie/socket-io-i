import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'



// initial state
const initialState = {
    profileDir: 'MY-POSTS',
    profiles: [],
}

// get all users posts 
export const getAllUsersProfiles = createAsyncThunk('profiles/getAllUsersProfiles',async () => {
    try{
        const response = await axios.get('/api/profiles/get-all-users-profiles')
        return response.data
    }catch(err){
        return err.response.data
    }
})
const profilesSlice = createSlice({
    name: 'profiles',
    initialState,
    reducers: {
        setProfileDir: (state,action) => {
            state.profileDir = action.payload
        },
    },
    extraReducers: builder => {
        builder
            ///////////////////////////////////////////////
            // get all users profiles fulfilled case
            .addCase(getAllUsersProfiles.fulfilled,(state,action)=>{
                if(action.payload.profiles){
                    state.profiles = action.payload.profiles
                }
            })
            // get all users profiles rejected case
            .addCase(getAllUsersProfiles.rejected,state => {
                console.log('get all users profiles rejected case')
            })
    }
})

// actions
export const {
    setProfileDir,
} = profilesSlice.actions

// selectors
// profileDir
export const selectProfileDir = state => state.profiles.profileDir
// profiles
export const selectProfiles = state => state.profiles.profiles

export default profilesSlice.reducer