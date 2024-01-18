import { useEffect } from 'react'
import {useDispatch} from 'react-redux'

// actions from slices
// users
import {
  checkAuth,
  getAllUsers,
} from './features/users/usersSlice'

// components
// header
import Header from "./components/Header"
// pages
// home
import Home from "./features/home/Home"

const App = () => {
  // hooks
  const dispatch = useDispatch()
  // effects
  // get all users
  useEffect(()=>{
    dispatch(getAllUsers())
  })
  // auth  check
  useEffect(()=>{
    dispatch(checkAuth())
  })
  return (
    <div className="w-screen h-screen flex flex-col">
      <Header />
      <Home />
    </div>
  )
}

export default App