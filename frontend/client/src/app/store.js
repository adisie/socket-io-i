import {configureStore} from '@reduxjs/toolkit'

// reducers
// home
import homeReducer from '../features/home/homeSlice'
// users
import usersReducers from '../features/users/usersSlice'

export const store = configureStore({
    reducer: {
        home: homeReducer,
        users: usersReducers,
    }
})