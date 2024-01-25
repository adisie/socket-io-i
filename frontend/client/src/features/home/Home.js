import {useSelector} from 'react-redux'

// actions from slices
// homeSlice
import {
  selectMainDir,
} from './homeSlice'

// pages
// Posts
import Posts from "../posts/Posts"
// Users
import Users from "../users/Users"
// Profiles
import Profiles from "../profiles/Profiles"

// *****************
// main
const Home = () => {
  // states from slices
  // homeSlice
  const mainDir = useSelector(selectMainDir)
  return (
    <div className="flex-grow">
      <div className="max-w-[820px] mx-auto px-3 py-1">
        {
          mainDir === "HOME" 
          ?
          <Posts />
          :
          mainDir === "AUTH" 
          ?
          <Users />
          :
          mainDir === "PROFILES"
          ?
          <Profiles />
          :
          <></>
        }
      </div>
    </div>
  )
}

export default Home