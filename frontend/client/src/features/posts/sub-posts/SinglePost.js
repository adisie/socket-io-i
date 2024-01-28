import {formatDistanceToNow} from 'date-fns'
import {useDispatch} from 'react-redux'

// actions from slices
// home
import {
    setUserIdProfiles,
    setMainDir,
} from '../../home/homeSlice'

// GetAuthorProfile
import GetAuthorProfile from "../../profiles/sup-profiles/GetAuthorProfile"
// GetUsername
import GetUsername from "../../users/sub-users/GetUsername"
import IsOnline from "../../users/sub-users/IsOnline"
// PostControllers
import PostControllers from "./PostControllers"

// **********************
// main
const SinglePost = ({post}) => {

    // hooks
    const dispatch = useDispatch()

  return (
    <div className="py-1 border-b border-emerald-700 border-opacity-[.15] mb-3 text-xs text-emerald-950 font-serif">
        <div className="ml-5">
            <p className="text-justify">
                {post.text}
            </p>
        </div>
        {/* ******* author info container ******* */}
        <div className="flex items-center my-1">
            {/* author profile and name */}
            <div className="flex items-center cursor-pointer" 
                onClick={()=>{
                    dispatch(setMainDir('PROFILES'))
                    dispatch(setUserIdProfiles(post.authorId))
                }}
            >
                <GetAuthorProfile userId={post.authorId}/>
                <span>
                    <GetUsername userId={post.authorId}/>
                </span>
            </div>
            {/* ***** IsOnline ****** */}
            <IsOnline userId={post.authorId}/>
            {/* **** post controllers */}
            <PostControllers userId={post.authorId} postId={post._id}/>
            {/* **** date **** */}
            <div>
                <span>{formatDistanceToNow(new Date(post.createdAt),{addSuffix: true})}</span>
            </div>
        </div>
    </div>
  )
}

export default SinglePost