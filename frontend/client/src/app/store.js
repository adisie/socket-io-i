import {configureStore} from '@reduxjs/toolkit'

// reducers
// homeReducer
import homeReducer from '../features/home/homeSlice'
// usersReducer
import usersReducer from '../features/users/usersSlice'
// profilesReducer
import profilesReducer from '../features/profiles/profilesSlice'
// postsReducer
import postsReducer from '../features/posts/postsSlice'

export const store = configureStore({
    reducer: {
        home: homeReducer,
        users: usersReducer,
        profiles: profilesReducer,
        posts: postsReducer,
    }
})