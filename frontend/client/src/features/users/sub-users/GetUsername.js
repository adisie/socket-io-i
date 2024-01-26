import {useSelector} from 'react-redux'

// actions from slices
// users
import {selectUsers} from '../usersSlice'

const GetUsername = ({userId}) => {
  // states from slices
  // users
  const users = useSelector(selectUsers) 
  let user = users.find(user=>user._id === userId)
  return (
    <>{user?.username}</>
  )
}

export default GetUsername