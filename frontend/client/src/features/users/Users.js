import {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'

// actions from slices
// users
import { 
    selectIsLogin,
    selectIsPending,
    selectUser,
 } from './usersSlice' 

// home
import {
  setMainDir,
} from '../home/homeSlice'

// sub-pages
// login
import Login from "./users-form/Login"
// signup
import Signup from "./users-form/Signup"

// spinners
import UsersSpinner from './users-form/UsersSpinner'

// main
const Users = () => {
    // states from slices
    // users
    const isLogin = useSelector(selectIsLogin)
    const isPending = useSelector(selectIsPending)
    const user = useSelector(selectUser)

    // hooks
    const dispatch = useDispatch()

    // effects
    // redirect effect
    useEffect(()=>{
      if(user){
        dispatch(setMainDir('HOME'))
      }
    })

    if(isPending){
      return <UsersSpinner />
    }

  return (
    <div className='flex-grow flex justify-center pt-5'>
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