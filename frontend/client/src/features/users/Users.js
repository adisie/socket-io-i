import {useSelector} from 'react-redux'

// actions from slices
// usersSlice
import {
  selectIsLogin,
  selectIsUserPending,
} from './usersSlice'

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
  const isUserPending = useSelector(selectIsUserPending)

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