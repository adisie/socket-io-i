import {useSelector,useDispatch} from 'react-redux'
import { useEffect } from 'react'
import {io} from 'socket.io-client'

// actions from states
// users
import {
  selectUser,
  setOnlineUsers,
} from './features/users/usersSlice'

// components
// header
import Header from "./components/Header"
//pages
// home
import Home from "./features/home/Home"

// socket
const socket = io('ws://localhost:5000')

// main
const App = () => {
  // states from slices
  // users
  const user = useSelector(selectUser)
  // hooks
  const dispatch = useDispatch()

  // effects
  useEffect(()=>{
    if(user){
      socket.emit('getUserOnRefresh',user._id)
    }
  })

  useEffect(()=>{
    socket.on('sendOnlineUsersOnRefresh',data=>{
      dispatch(setOnlineUsers(data))
    })
  })



  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <Home />
    </div>
  )
}

export default App