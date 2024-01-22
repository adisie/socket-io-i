import {useEffect} from 'react'
import { useSelector,useDispatch} from "react-redux"
import {io} from 'socket.io-client'

// actions from slices
// home slice
import {
    selectMainDir,
} from './homeSlice'
// users
import {
    getAllUsers,
    setOnlineUsers,
} from '../users/usersSlice'
// posts
import {
    getAllPosts,
} from '../posts/postsSlice'

// pages
// posts
import Posts from "../posts/Posts"
// users
import Users from "../users/Users"

// socket
const socket = io('ws://localhost:5000')

// main 
const Home = () => {
    // states from slices
    // home
    const mainDir = useSelector(selectMainDir)
    // hooks
    const dispatch = useDispatch()

    // effects
    // get all users
    useEffect(()=>{
        dispatch(getAllUsers())
    })
    // get all posts
    useEffect(()=>{
        dispatch(getAllPosts())
    })

    useEffect(()=>{
        socket.emit('getOnlineUsersOnRefresh')
    })
    useEffect(()=>{
        socket.on('getAllOnlineUsersOnRefresh',data=>{
            dispatch(setOnlineUsers(data))
        })
    })
    
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