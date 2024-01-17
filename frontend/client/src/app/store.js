import {configureStore} from '@reduxjs/toolkit'

// reducers
// users reducers
import usersReducer from '../features/users/usersSlice'
// home slice
import homeReducer from '../features/home/homeSlice'

export const store = configureStore({
    reducer: {
        users: usersReducer,
        home: homeReducer,
    }
})
