import { useSelector } from "react-redux"

// actions from slices
// users slice
import {
    selectAllUsers,
} from '../../users/usersSlice'

const GetUsername = ({userId}) => {
    // states from slices
    // users slice
    const allUsers = useSelector(selectAllUsers)
    let user = allUsers.find(user=>user._id === userId)
  return (
    <>
    <>{user?.username}</>
    </>
  )
}

export default GetUsername