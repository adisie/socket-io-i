import {configureStore} from '@reduxjs/toolkit'

// reducers
// post reducer
import postReducer from '../features/post/postSlice'

export const store = configureStore({
    reducer: {
        post: postReducer,
    }
})