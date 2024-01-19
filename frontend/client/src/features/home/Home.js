import { useSelector } from "react-redux"

// actions from slices
// home slice
import {
    selectMainDir,
} from './homeSlice'

// pages
// posts
import Posts from "../posts/Posts"
// users
import Users from "../users/Users"

// main 
const Home = () => {
    // states from slices
    // home
    const mainDir = useSelector(selectMainDir)

  return (
    <div className="flex-grow flex">
        <div className="max-w-[820px] mx-auto px-3 flex-grow flex justify-center">
            {
                mainDir === 'HOME' 
                ?
                <Posts />
                :
                mainDir === 'AUTH' 
                ?
                <Users />
                :
                <></>
            }
        </div>
    </div>
  )
}

export default Home