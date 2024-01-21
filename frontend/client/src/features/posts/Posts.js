import {useSelector,useDispatch} from 'react-redux'
import { useEffect } from 'react'
import {io} from 'socket.io-client'

// actions from slices
// users
import {
  selectUser,
} from '../users/usersSlice'
// posts
import {
  addNePostEvent,
  deletePostEvent,
} from './postsSlice'

// sub components
import PostsList from "./posts-sub-components/PostsList"
import NewPostForm from "./posts-sub-components/NewPostForm"

// socket
const socket = io('ws://localhost:5000')

// main
const Posts = () => {
  // states from slices
  // users
  const user = useSelector(selectUser)

  // hooks
  const dispatch = useDispatch()

  // effect
  useEffect(()=>{
    socket.on('getNewPost',data=>{
      dispatch(addNePostEvent(data))
    })
  },[])

  // delete post
  useEffect(()=>{
    socket.on('deletePost',data=>{
      dispatch(deletePostEvent(data._id))
    })
  },[])


  return (
    <div className='flex-grow flex flex-col'>
      <PostsList />
      {
        user 
        ?
        <NewPostForm />
        :
        <></>
      }
    </div>
  )
}

export default Posts