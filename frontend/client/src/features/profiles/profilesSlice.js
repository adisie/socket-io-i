import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import {io} from 'socket.io-client'


// sockets
const socket = io('ws://localhost:5000')

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

// add new profile
export const addNewProfile = createAsyncThunk('profiles/addNewProfile',async data =>{
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
        const response = await axios.delete(`/api/profiles/delete-profile/${_id}`)
        return response.data
    }catch(err){
        return err.response.data
    }
})

const profilesSlice = createSlice({
    name: 'profiles',
    initialState,
    reducers: {
        addNewProfileEvent: (state,action) => {
            let index = state.profiles.findIndex(profile=>profile._id === action.payload.userId) 
            // console.log(index)
            let profiles = []
            profiles = [...state.profiles.find(profile=>profile._id === action.payload.userId).profiles,{
                _id: action.payload._id,
                profilePath: action.payload.profilePath,
                createdAt: action.payload.createdAt,
            }]  
            
            state.profiles.at(index).profiles = profiles
        },
        deleteProfileEvent: (state,action) => {
            let profiles = state.profiles.find(profile=>profile._id === action.payload.userId)
            profiles = profiles.profiles.filter(prof => prof._id !== action.payload.profileId)
            let index = state.profiles.findIndex(pro => pro._id === action.payload.userId)
            state.profiles[index].profiles = profiles
        },
        getAllProfiles: state => {
            return state.profiles
        },
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
            // add new profile
            // fulfilled
            .addCase(addNewProfile.fulfilled,(state,action)=>{
                socket.emit('newProfileImageAdded',action.payload.newProfile)
            })
            // rejected case
            .addCase(addNewProfile.rejected,state=>{
                console.log('Add New Profile Rejected Case')
            })
            // delete profile
            // fulfilled case
            .addCase(deleteProfile.fulfilled,(state,action)=>{
                if(action.payload?._id){
                    socket.emit('deleteProfileEvenet',action.payload)
                }
            })
            // rejected case
            .addCase(deleteProfile.rejected,state=>{
                console.log('Delete Profile Rejected Case')
            })
    }
})

// actions
export const {
    addNewProfileEvent,
    deleteProfileEvent,
    getAllProfiles,
} = profilesSlice.actions

// selectors
// profiles
export const selecteProfiles = state => state.profiles.profiles
export default profilesSlice.reducer