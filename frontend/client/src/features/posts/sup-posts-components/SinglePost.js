import {useDispatch,useSelector} from 'react-redux'
import {formatDistanceToNow} from 'date-fns'

// actions from slices
// users
import {
    selectUser,
} from '../../users/usersSlice'
// posts
import {
    deleteSinglePost,
} from '../postSlice'

// icons
// user icon
import { MdAccountCircle } from "react-icons/md"
// delete
import { AiFillDelete } from "react-icons/ai"

// sub - components
import GetUsername from "./GetUsername"

// main funstion
const SinglePost = ({post}) => {
    // states from slices
    // users
    const user = useSelector(selectUser)
    // hooks
    const dispatch = useDispatch()

  return (
    <div className="text-emerald-950 text-xs font-serif my-3 border-b border-emerald-950 border-opacity-[.13] mb-7">
        <div className="ml-5">
            <p className="text-justify">
                {post.text}
            </p>
        </div>
        <div className="flex items-center py-1">
            <div className="flex items-center mr-3">
                <MdAccountCircle className="text-2xl "/>
                <span>
                    <GetUsername userId={post.authorId}/>
                </span>
            </div>
            <div>
                {
                    user && user._id === post.authorId 
                    ?
                    <button className="text-xl opacity-[.3] mx-3" 
                        onClick={()=>{
                            dispatch(deleteSinglePost(post._id))
                        }}
                    >
                        <AiFillDelete />
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