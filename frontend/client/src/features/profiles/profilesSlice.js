import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

// initial state
const initialState = {
    profiles: [],
}

// get all profiles
export const getAllUsersProfiles = createAsyncThunk('profiles/getAllUsersProfiles',async () => {
    try{
        const response = await axios.get('/api/users/get-profiles')
        return response.data
    }catch(err){
        return err.response.data
    }
})

const profilesSlice = createSlice({
    name: 'profiles',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder 
            // cases
            // get profiles case
            // get profiles fulfilled
            .addCase(getAllUsersProfiles.fulfilled,(state,action)=>{
                if(action.payload.profiles){
                    state.profiles = action.payload.profiles
                }
            })
            // get profiles rejected case
            .addCase(getAllUsersProfiles.rejected,state=>{
                console.log('get all profiles rejected case')
            })
    }
})

// selectors
// profiles
export const selecteProfiles = state => state.profiles.profiles
export default profilesSlice.reducer