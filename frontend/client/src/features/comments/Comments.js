import {useSelector} from 'react-redux'

// actions from slices
// users
import {
  selectUser,
} from '../users/usersSlice'

// icons
// exit comment
import { RiPictureInPictureExitFill } from "react-icons/ri"

// sub components
import PostControllers from "../posts/sub-posts/PostControllers"
import GetAuthorProfile from "../profiles/sup-profiles/GetAuthorProfile"
import IsOnline from "../users/sub-users/IsOnline"

// sub-comments
// CommentsList
import CommentsList from './sub-comments/CommentsList'
// NewCommentForm
import NewCommentForm from "./sub-comments/NewCommentForm"

// *********************
// main
const Comments = () => {
  // states from slices
  // users
  const user = useSelector(selectUser)

  // comments
  const exitComments = () => {
    let commentContainer = document.getElementById('post-comments-container')
    if(commentContainer.classList.contains('flex')){
        commentContainer.classList.add('hidden')
        commentContainer.classList.remove('flex')
    }
}

  return (
    <div className="absolute z-50 w-full h-full bg-white text-xs text-emerald-950 font-serif flex-col hidden" id="post-comments-container">
      {/* post */}
      <div className="border-b border-emerald-700 border-opacity-[.13] mb-3">
        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, ullam, praesentium harum, corrupti laboriosam ea dolorum numquam asperiores maxime molestias soluta! Iste dolorum odio, cumque excepturi consectetur voluptate sapiente nobis temporibus ratione. Tempore, iste illum necessitatibus velit laboriosam excepturi, fugit voluptatibus neque nemo, odit voluptate aperiam veniam consequatur recusandae reprehenderit.
          </p>
        </div>
        <div className="flex items-center justify-between my-1 ">
          <div className="flex items-center">
          {/* author image and name */}
          <div className="flex items-center">
            <GetAuthorProfile />
            <span className="mx-1">username</span>
            <IsOnline />
          </div>
          {/* post controllers */}
          <PostControllers />
          </div>
          <button className="self-end text-emerald-950 text-xl mx-1 opacity-[.7]" 
            onClick={exitComments} 
          >
            <RiPictureInPictureExitFill />
          </button>
        </div>
      </div>
      {/* comment list */}
      <CommentsList />
      {/* new comment */}
      {
        user && <NewCommentForm />
      }
    </div>
  )
}

export default Comments