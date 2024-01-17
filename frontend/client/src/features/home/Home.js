import {useSelector} from 'react-redux'

// actions from slices
// home slice
import {
  selectMainDir,
} from './homeSlice'

// sub-pages and components
// posts page
import Posts from "../posts/Posts"
// users page
import Users from "../users/Users"
// home left side bar component
import HomeLeftSideBar from "./home-sub-components/HomeLeftSideBar"

const Home = () => {
  // states from slices
  // home slice
  const mainDir = useSelector(selectMainDir)
  return (
    <div className="flex-grow flex">
        <div className="max-w-[1200px] px-1 flex-grow flex">
            <HomeLeftSideBar />
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