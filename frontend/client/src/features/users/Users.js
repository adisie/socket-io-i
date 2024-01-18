import { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'


// actions from slices
// users slices
import {
  selectIsLogin,
  selectUser,
} from './usersSlice'
// home slices
import {
  setMainDir,
} from '../home/homeSlice'

// forms 
// login form
import Login from "./users-forms/Login"
// signup
import Signup from "./users-forms/Signup"

const Users = () => {
  // states from slices
  // users slices
  const isLogin = useSelector(selectIsLogin)
  const user = useSelector(selectUser)
  // hooks
  const dispatch = useDispatch()

  // effects
  useEffect(()=>{
    if(user){
      dispatch(setMainDir('HOME'))
    }
  },[user])

  return (
    <div className='flex-grow flex justify-center'>
      {
        isLogin 
        ?
        <Login />
        :
        <Signup />
      }
    </div>
  )
}

export default Users