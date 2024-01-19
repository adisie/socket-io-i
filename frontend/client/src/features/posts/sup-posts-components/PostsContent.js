import { useSelector,useDispatch } from "react-redux"
import { useEffect } from "react"

import {io} from  'socket.io-client'

// actions from slices
// posts
import {
  selectPosts,
  addNewPostToList,
} from '../postSlice'

// sup-posts-content components
// single post
import SinglePost from "./SinglePost"
// socket
const socket = io('ws://localhost:5000') 
// main functions
const PostsContent = () => {
  // states from slices
  // posts slice
  const posts = useSelector(selectPosts)

  // hooks
  const dispatch = useDispatch()

  socket.on('addNewPost',data=>{
    dispatch(addNewPostToList(data))
  })

  return (
    <div className='flex-grow max-h-[92vh] overflow-y-auto px-3'>
        {
          posts.map(post=>(
            <SinglePost key={post._id} post={post}/>
          ))
        }
    </div>
  )
}

export default PostsContent