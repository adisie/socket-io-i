import {configureStore} from '@reduxjs/toolkit'

// reducers
// homeReducer
import homeReducer from '../features/home/homeSlice'
// usersReducer
import usersReducer from '../features/users/usersSlice'

export const store = configureStore({
    reducer: {
        home: homeReducer,
        users: usersReducer,
    }
})