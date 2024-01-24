import {configureStore} from '@reduxjs/toolkit'

// reducers
// home
import homeReducer from '../features/home/homeSlice'
// users
import usersReducer from '../features/users/usersSlice'
// profiles
import profilesReducer from '../features/profiles/profilesSlice'
// posts
import postsReducer from '../features/posts/postsSlice'

export const store = configureStore({
    reducer: {
        home: homeReducer,
        users: usersReducer,
        profiles: profilesReducer,
        posts: postsReducer,
    }
})