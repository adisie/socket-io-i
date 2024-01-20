import {useSelector,useDispatch} from 'react-redux'
import { useEffect } from 'react'

// actions from slices
// users 
import {
    selectIsLogin,
    selectIsLoading,
    selectUser,
} from './usersSlice'
// home
import {
  setMainDir,
} from '../home/homeSlice'

// sub-components
// login
import Login from "./users-forms/Login"
// signup
import Signup from "./users-forms/Signup"
// user spinner
import UserSpinner from './users-forms/UserSpinner'

// main
const Users = () => {
    // states from slices
    // users
    const isLogin = useSelector(selectIsLogin)
    const isLoading = useSelector(selectIsLoading)
    const user = useSelector(selectUser)

    // hooks
    const dispatch = useDispatch()

    // effects
    useEffect(()=>{
      if(user){
        dispatch(setMainDir('HOME'))
      }
    })

    // spinner
    if(isLoading){
      return <UserSpinner />
    }
  return (
    <div className='flex justify-center'>
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