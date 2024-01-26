import { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'

// actions from slices
// postsSlice
import {
  getAllPosts,
} from './postsSlice'

// actions from slices
// users
import {
  selectUser,
  getAllUsers,
} from '../users/usersSlice'

// sub-posts
// PostsList
import PostsList from "./sub-posts/PostsList"
// NewPostForm
import NewPostForm from "./sub-posts/NewPostForm"
// comments
import Comments from '../comments/Comments'

// ******************
// main
const Posts = () => {
  // states from slices
  // users
  const user = useSelector(selectUser)
  
  // hooks
  const dispatch = useDispatch()

  // effect
  // get all users
  useEffect(()=>{
    dispatch(getAllUsers())
  },[])
  // get all posts effect
  useEffect(()=>{
    dispatch(getAllPosts())
  },[])

  return (
    <div className="flex-grow flex flex-col relative">
      <PostsList />
      {
        user && <NewPostForm />
      }
      <Comments />
    </div>
  )
}

export default Posts