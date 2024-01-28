import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import {SOCKET} from '../../config'



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

// add new user profile
export const addNewUserProfile = createAsyncThunk('profiles/addNewUserProfile',async data => {
    try{
        const response = await axios.post('/api/profiles/add-new-profile',data)
        return response.data
    }catch(err){
        return err.response.data
    }
})

// delete profile
export const deleteProfile = createAsyncThunk('profiles/deleteProfile',async _id => {
    try{
        const response = await axios.delete(`/api/profiles/delete-single-profile/${_id}`)
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
        addProfileToListEvent: (state,action) => {
            let userProfiles = state.profiles.find(profile=>profile._id === action.payload.userId) 
            let index = state.profiles.findIndex(profile=>profile._id === action.payload.userId)
            let profiles = [...userProfiles?.profiles,{_id: action.payload._id,profilePath: action.payload.profilePath}] 
            let filteredProfiles = [] 
            profiles.forEach(profile=>{
                let isProfileExist = filteredProfiles.find(pro=>pro._id ===profile._id)
                if(!isProfileExist){
                    filteredProfiles.push(profile)
                }
            })
            // final update
            state.profiles[index] = {_id: action.payload.userId,profiles: filteredProfiles}
        },
        removeDeletedProfileFromListEvent: (state,action) => {
            // console.log(action.payload)
            let index = state.profiles.findIndex(profile=>profile._id ===action.payload.userId) 
            let userProfiles = state.profiles.find(profile=>profile._id === action.payload.userId)  
            let profiles = userProfiles.profiles
            profiles = profiles.filter(profile=>profile._id !== action.payload._id)
            state.profiles.at(index).profiles = profiles  
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
            ///////////////////////////////////////////////////
            // add new profile case
            // fulfilled case
            .addCase(addNewUserProfile.fulfilled,(state,action)=>{
                if(action.payload.profile){
                    SOCKET.emit('addNewUserProfileEvent',action.payload.profile)
                }
            })
            // rejected case
            /////////////////
            ////////////////////////////////////
            // delete profile
            // fulfilled case
            .addCase(deleteProfile.fulfilled,(state,action)=>{
                if(action.payload._id){
                    SOCKET.emit('deleteProfileEvent',action.payload)
                }
            })
            // handle rejected case over here....
    }
})

// actions
export const {
    setProfileDir,
    addProfileToListEvent,
    removeDeletedProfileFromListEvent,
} = profilesSlice.actions

// selectors
// profileDir
export const selectProfileDir = state => state.profiles.profileDir
// profiles
export const selectProfiles = state => state.profiles.profiles

export default profilesSlice.reducer