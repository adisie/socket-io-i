import {formatDistanceToNow} from 'date-fns'
import { useSelector,useDispatch } from 'react-redux'

// actions from slices
// users
import {
    selectUser,
} from '../../users/usersSlice'
// posts
import {
    deletePost,
} from '../postsSlice'

// icons
// user
import { RiUser6Line } from "react-icons/ri"
// delete
import { AiOutlineDelete } from "react-icons/ai"

// get username component
import GetUsername from '../../users/users-forms/GetUsername'


// main
const SinglePost = ({post}) => {
    // states from slices
    // user
    const user = useSelector(selectUser)
    // hooks
    const dispatch = useDispatch()
    

    // delete post
    const deletePostHandler = _id => {
        dispatch(deletePost(_id))
    }

  return (
    <div className="mb-5 border-b border-black border-opacity-[.1] text-xs font-serif opacity-[.85] pb-2">
        <div className="ml-5 mb-1">
            <p className="text-justify">
                {post.text}
            </p>
        </div>
        {/* author controls */}
        <div className="flex items-center"> 
            <div className="flex items-center">
                <RiUser6Line className="text-2xl opacity-[.75]"/>
                <span>
                    <GetUsername _id = {post.authorId}/>
                </span>
                <div className="w-[7px] h-[7px] rounded-full bg-black ml-1"></div>
            </div>
            <div className="ml-3 flex items-center">
                {
                    user && user._id === post.authorId
                    ?
                    <button className="text-lg mx-2 opacity-[.5]" 
                        onClick={()=>{
                            deletePostHandler(post._id)
                        }}
                    >
                        <AiOutlineDelete />
                    </button>
                    :
                    <></>
                }
                <span className="italic">{formatDistanceToNow(new Date(post.createdAt),{addSuffix: true})}</span>
            </div>
        </div>
    </div>
  )
}

export default SinglePost