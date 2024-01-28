import {useSelector} from 'react-redux'

// actions from slices
// users
import {
  selectOnlineUsers,
} from '../usersSlice'

// main
const IsOnline = ({userId}) => {
  // states from slices
  // users
  const onlineUsers = useSelector(selectOnlineUsers)
  const isOnline = onlineUsers.find(user=>user.userId===userId)
  // console.log(onlineUsers)
  return (
    <>
    {
      isOnline 
      ?
      <div className="w-[7px] h-[7px] rounded-full bg-emerald-700 mx-1"></div>
      :
      <></>
    }
    </>
  )
}

export default IsOnline