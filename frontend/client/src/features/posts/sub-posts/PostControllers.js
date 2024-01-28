import {useSelector,useDispatch} from 'react-redux'

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
// like
import { PiThumbsUpDuotone } from "react-icons/pi"
// comments
import { TiMessage } from "react-icons/ti"
// favorite
import { MdFavoriteBorder } from "react-icons/md"
// delete
import { AiOutlineDelete } from "react-icons/ai"

// ***************************
// main
const PostControllers = ({userId,postId}) => {

    // states from slices
    // users
    const user = useSelector(selectUser)

    // hooks
    const dispatch = useDispatch()
    
    // comments
    const gotoPostComments = () => {
        let commentContainer = document.getElementById('post-comments-container')
        if(commentContainer.classList.contains('hidden')){
            commentContainer.classList.remove('hidden')
            commentContainer.classList.add('flex')
        }
    }
    
  return (
    <div className="flex items-center">
        <span className="text-sm mr-1">12</span>
        {/* *** like *** */}
        <button className="text-xl mr-1">
            <PiThumbsUpDuotone />
        </button>
        <span className="text-sm mr-1">33</span>
        {/* *** comments *** */}
        <button className="text-xl mr-1" 
            onClick={()=>{
                gotoPostComments()
            }}
        >
            <TiMessage />
        </button>
        {/* *** favorite *** */}
        <button className="text-xl mr-1">
            <MdFavoriteBorder />
        </button>
        {/* *** delete *** */}
        {
            user?._id === userId 
            ?
            <button className="text-xl opacity-[.7] mr-1" 
                onClick={()=>{
                    dispatch(deleteSinglePost(postId))
                }}
            >
                <AiOutlineDelete />
            </button>
            :
            <></>
        }
    </div>
  )
}

export default PostControllers