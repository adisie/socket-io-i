import {useSelector} from 'react-redux'

// actions from slice
// users
import {
  selectUsers,
} from '../usersSlice'

// main
const GetUsername = ({userId}) => {
  // states from slices
  // users
  const users = useSelector(selectUsers) 
  let user = users.find(user=>user._id === userId)
  return (
    <>
    {
        user?.username
    }
    </>
  )
}

export default GetUsername