import {useSelector} from 'react-redux'

// actions from slices
// home
import {
    selectMainDir,
} from './homeSlice'

// pages
// posts
import Posts from "../posts/Posts"
// users
import Users from "../users/Users"
// profiles
import Profiles from "../profiles/Profiles"

// main
const Home = () => {
    // states from slices
    // home
    const mainDir = useSelector(selectMainDir)

  return (
    <div className="flex-grow flex">
        <div className="max-w-[820px] mx-auto px-3 flex-grow flex">
            {
                mainDir === 'HOME' 
                ?
                <Posts />
                :
                mainDir === 'AUTH' 
                ?
                <Users />
                :
                mainDir === 'PROFILES'
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