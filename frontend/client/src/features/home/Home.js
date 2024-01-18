import {useState,useEffect } from 'react'
import {useSelector} from 'react-redux'
import {io} from 'socket.io-client'

// actions from slices
// home slice
import {
  selectMainDir,
} from './homeSlice'
// users
import {
  selectAllUsers,
} from '../users/usersSlice'

// sub-pages and components
// posts page
import Posts from "../posts/Posts"
// users page
import Users from "../users/Users"
// home left side bar component
import HomeLeftSideBar from "./home-sub-components/HomeLeftSideBar"

const Home = () => {
  // local state
  const [socket,setSocket] = useState(null)
  // states from slices
  // home slice
  const mainDir = useSelector(selectMainDir)
  // users slice
  const allUsers = useSelector(selectAllUsers)
   // effects
  // socket
  useEffect(()=>{
    setSocket(io('ws://localhost:5000'))
  },[])

  socket?.on('newUserSignup',data=>{
    console.log(data)
  })

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