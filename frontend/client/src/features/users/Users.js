import {useSelector} from 'react-redux'

// actions from slices
// usersSlice
import {
  selectIsLogin,
} from './usersSlice'

// sub-users
// LoginForm
import LoginForm from "./sub-users/LoginForm"
// SignupForm
import SignupForm from "./sub-users/SignupForm"

// ******************
// main
const Users = () => {
  // states from slices
  // usersSlice
  const isLogin = useSelector(selectIsLogin)
  return (
    <div>
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