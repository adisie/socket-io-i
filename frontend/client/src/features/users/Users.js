import {useSelector} from 'react-redux'

// actions from slices
// users
import { 
    selectIsLogin,
 } from './usersSlice' 

// sub-pages
// login
import Login from "./users-form/Login"
// signup
import Signup from "./users-form/Signup"

// main
const Users = () => {
    // states from slices
    // users
    const isLogin = useSelector(selectIsLogin)
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