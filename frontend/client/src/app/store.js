import {configureStore} from '@reduxjs/toolkit'

// reducers
// home reducers
import homeReducer from '../features/home/homeSlice'
// users
import usersReducer from '../features/users/usersSlice'

export const store = configureStore({
    reducer: {
        home: homeReducer,
        users: usersReducer,
    }
})