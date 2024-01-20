import {configureStore} from '@reduxjs/toolkit'

// reducers
// home reducers
import homeReducer from '../features/home/homeSlice'
// users
import usersReducer from '../features/users/usersSlice'
// posts
import postsReducer from '../features/posts/postsSlice'

export const store = configureStore({
    reducer: {
        home: homeReducer,
        users: usersReducer,
        posts: postsReducer,
    }
})