import {configureStore} from '@reduxjs/toolkit'

// reducers
// users reducers
import usersReducer from '../features/users/usersSlice'
// home slice
import homeReducer from '../features/home/homeSlice'
// posts slice
import postReducer from '../features/posts/postSlice'

export const store = configureStore({
    reducer: {
        users: usersReducer,
        home: homeReducer,
        posts: postReducer,
    }
})
