import {useSelector} from 'react-redux'

// actions from slices
// users slices
import {
  selectIsLogin,
} from './usersSlice'

// forms 
// login form
import Login from "./users-forms/Login"
// signup
import Signup from "./users-forms/Signup"

const Users = () => {
  // states from slices
  // users slices
  const isLogin = useSelector(selectIsLogin)

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