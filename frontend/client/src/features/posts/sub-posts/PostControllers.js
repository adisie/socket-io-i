
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
const PostControllers = () => {
    
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
        <button className="text-2xl mr-1">
            <PiThumbsUpDuotone />
        </button>
        <span className="text-sm mr-1">33</span>
        {/* *** comments *** */}
        <button className="text-2xl mr-1" 
            onClick={()=>{
                gotoPostComments()
            }}
        >
            <TiMessage />
        </button>
        {/* *** favorite *** */}
        <button className="text-2xl mr-1">
            <MdFavoriteBorder />
        </button>
        {/* *** delete *** */}
        <button className="text-2xl opacity-[.7] mr-1">
            <AiOutlineDelete />
        </button>
    </div>
  )
}

export default PostControllers