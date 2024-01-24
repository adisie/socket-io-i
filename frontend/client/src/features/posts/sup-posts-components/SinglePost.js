import {formatDistanceToNow} from 'date-fns'
import { useSelector,useDispatch } from 'react-redux'

// actions from slices
// users
import {
    selectUser,
} from '../../users/usersSlice'
// posts
import {
    deleteSinglePost,
} from '../postsSlice'

// icons
// delete
import { RiDeleteBinLine } from "react-icons/ri"

// sub pages
// get username
import GetUsername from "../../users/users-form/GetUsername"
// get profiles
import GetProfile from "../../users/users-form/GetProfile"
// IsOnlie
import IsOnline from "../../users/users-form/IsOnline"

// main
const SinglePost = ({post}) => {
    // states from slices
    // users
    const user = useSelector(selectUser)

    // hooks
    const dispatch = useDispatch()

  return (
    <div className="border-b border-emerald-700 border-opacity-[.15] mb-3 text-xs font-serif opacity-[.85]">
        <div className="pl-7"> 
            <p className="text-justify">
                {post.text}
            </p>
        </div>
        <div className="flex items-center my-1">
            <div className="flex items-center cursor-pointer">
                <GetProfile userId={post.authorId}/>
                <span className="mr-1">
                    <GetUsername userId={post.authorId}/>
                </span>
                <IsOnline />
            </div>
            {
                user && user._id === post.authorId && <button className="text-xl mx-1 opacity-[.65]" 
                    onClick={()=>{
                        dispatch(deleteSinglePost(post._id))
                    }}
                >
                    <RiDeleteBinLine />
                </button>
            }
            <span className='ml-1'>{formatDistanceToNow(new Date(post.createdAt),{addSuffix: true})}</span>
        </div>
    </div>
  )
}

export default SinglePost