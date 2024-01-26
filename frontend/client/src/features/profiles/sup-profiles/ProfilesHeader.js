import {useDispatch} from 'react-redux'

// actions from slices
import {
  setProfileDir,
} from '../profilesSlice'

// icons
import { MdOutlinePostAdd } from "react-icons/md"
import { MdOutlineFavorite } from "react-icons/md"

// ***************************
// main
const ProfilesHeader = () => {

  // hooks
  const dispatch = useDispatch()

  // setProfileDirHandler
  const setProfileDirHandler = dir => {
    dispatch(setProfileDir(dir))
  }

  return (
    <div className="text-xs text-emerald-900 font-serif p-1 border-b border-emerald-700 border-opacity-[.1] mb-2">
      <div className="flex items-center">
        <button className="flex items-center" 
          onClick={()=>{
            setProfileDirHandler('MY-POSTS')
          }}
        >
          <MdOutlinePostAdd className="text-2xl"/>
          <span>Posts</span>
        </button>
        <button className="flex items-center ml-2"
          onClick={()=>{
            setProfileDirHandler('MY-FAVORITES')
          }} 
        >
          <MdOutlineFavorite className="ml-1 text-2xl"/>
          <span>Favorites</span>
        </button>
      </div>
    </div>
  )
}

export default ProfilesHeader