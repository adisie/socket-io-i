import { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'


// socket
import {SOCKET} from '../../config'

// actions from slices
// postsSlice
import {
  getAllPosts,
  addNewPostEvent,
  deleteSinglePostEvent,
} from './postsSlice'

// actions from slices
// users
import {
  selectUser,
  getAllUsers,
} from '../users/usersSlice'
// profiles
import {
  getAllUsersProfiles,
  addProfileToListEvent,
  removeDeletedProfileFromListEvent,
} from '../profiles/profilesSlice'

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
  // add new post event
  useEffect(()=>{
    SOCKET.on('addNewPostEvent',data=>{
      dispatch(addNewPostEvent(data))
    })
  },[])
  // delete single post
  useEffect(()=>{
    SOCKET.on('removeDeletedPostEvent',data=>{
      dispatch(deleteSinglePostEvent(data))
    })
  },[])
  //add profile to list event
  useEffect(()=>{
    SOCKET.on('addProfileToListEvent',data=>{
      dispatch(addProfileToListEvent(data))
    })
  },[])

  // remove profile
  useEffect(()=>{
    SOCKET.on('reomoveDeletedProfileFromList',data=>{
      dispatch(removeDeletedProfileFromListEvent(data))
    })
  },[])

  // get all users profiles
  useEffect(()=>{
    dispatch(getAllUsersProfiles())
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