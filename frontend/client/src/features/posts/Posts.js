import { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {io} from 'socket.io-client'

// actions from slices
// users
import {
  selectUser,
  checkAuth,
  getAllUsers,
} from '../users/usersSlice'
// profiles
import {
  getAllUsersProfiles,
  deleteProfileEvent,
} from '../profiles/profilesSlice'
// posts
import {
  getAllPosts,
  addNewPostEvent,
  removeDeletedSinglePost,
} from './postsSlice'

// sub-pages
// posts list
import PostsList from "./sup-posts-components/PostsList"
// new post form
import NewPostForm from "./sup-posts-components/NewPostForm"

// socket
const socket = io('ws://localhost:5000')

// main
const Posts = () => {
  // states from slices
  // users
  const user = useSelector(selectUser)

  // hooks
  const dispatch = useDispatch()

  // effects
  // check-auth
  useEffect(()=>{
    dispatch(checkAuth())
  })
  // get all users
  useEffect(()=>{
    dispatch(getAllUsers())
  })
  // get users profiles
  useEffect(()=>{
    dispatch(getAllUsersProfiles())
  })
  // get all posts
  useEffect(()=>{
    dispatch(getAllPosts())
  })
  // lieten for new post event
  useEffect(()=>{
    socket.on('sendBackNewPost',data=>{
      dispatch(addNewPostEvent(data))
    })
  })
  // listen for deleted single post evenet
  useEffect(()=>{
    socket.on('removeDeletedSinglePost',data => {
      dispatch(removeDeletedSinglePost(data))
    })
  })

  // delete profile event
  useEffect(()=>{
    socket.on('deleteProfielEventFromServer',data=>{
      dispatch(deleteProfileEvent({profileId: data._id,userId: data.userId}))
    })
  })

  return (
    <div className="flex-grow flex flex-col">
      <PostsList />
      {
        user && <NewPostForm />
      }
    </div>
  )
}

export default Posts