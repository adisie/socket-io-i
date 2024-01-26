import {useSelector,useDispatch} from 'react-redux'

// actions from slices
// homeSlice
import {
    setMainDir,
    selectMainDir,
} from '../features/home/homeSlice'

// icons
// share
import { FaShareSquare } from "react-icons/fa"

// sub-header
// LoginHeader
import LoginHeader from "./sub-headers/LoginHeader"
// LogoutHeader
import LogoutHeader from "./sub-headers/LogoutHeader"
// PostsSearchBar
import PostsSearchBar from '../features/posts/sub-posts/PostsSearchBar'

// ***************************************
// main
const Header = () => {
    // states from slices
    // homeSlice
    const mainDir = useSelector(selectMainDir)
    // hooks
    const dispatch = useDispatch()
    // comments
  const exitComments = () => {
    let commentContainer = document.getElementById('post-comments-container')
    if(commentContainer?.classList.contains('flex')){
        commentContainer?.classList.add('hidden')
        commentContainer?.classList.remove('flex')
    }
}
  return (
    <header className="bg-emerald-700 text-sm text-gray-300 font-serif">
        {/* ******** header ********** */}
        <div className="max-w-[820px] mx-auto px-3 py-1 flex items-center justify-between">
            {/* ******** site icon ******** */}
            <div>
                <button 
                    className="text-2xl" 
                    onClick={()=>{
                        dispatch(setMainDir("HOME"))
                        exitComments()
                    }}
                >
                    <FaShareSquare />
                </button>
            </div>
            {/* ******* search bar ****** */}
            <div className="flex items-center justify-start">
                {
                    mainDir === "HOME" && <PostsSearchBar />
                }
            </div>
            {/* ****** header controllers ****** */}
           {
            true 
            ?
            <LoginHeader />
            :
            <LogoutHeader />
           }
        </div>
    </header>
  )
}

export default Header