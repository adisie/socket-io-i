import {useSelector} from 'react-redux'

// actions from slices
// users 
import {
    selectIsLogin,
} from './usersSlice'

// sub-components
// login
import Login from "./users-forms/Login"
// signup
import Signup from "./users-forms/Signup"

// main
const Users = () => {
    // states from slices
    // users
    const isLogin = useSelector(selectIsLogin)
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