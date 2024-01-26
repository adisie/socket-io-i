import { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'

// actions from slices
// usersSlice
import {
  selectIsLogin,
  selectUser,
  selectIsUserPending,
} from './usersSlice'
// homeSlice
import {
  setMainDir,
} from '../home/homeSlice'

// sub-users
// LoginForm
import LoginForm from "./sub-users/LoginForm"
// SignupForm
import SignupForm from "./sub-users/SignupForm"
// UsersSpinner
import UsersSpinner from './sub-users/UsersSpinner'

// ******************
// main
const Users = () => {
  // states from slices
  // usersSlice
  const isLogin = useSelector(selectIsLogin)
  const user = useSelector(selectUser)
  const isUserPending = useSelector(selectIsUserPending)

  // hooks
  const dispatch = useDispatch()
  
  // effects
  // redirect user
  useEffect(()=>{
    if(user){
      dispatch(setMainDir('HOME'))
    }
  })
  
  if(isUserPending){
    return <UsersSpinner />
  }


  return (
    <div className="flex-grow flex justify-center">
      {
        isLogin 
        ?
        <LoginForm />
        :
        <SignupForm />
      }
    </div>
  )
}

export default Users