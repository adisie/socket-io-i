import {useSelector} from 'react-redux'

// actions from slices
// users slice
import {
    selectAllOnlineUsers,
} from '../../users/usersSlice'

const IsOnlie = ({userId}) => {
    // states from slices
    // users
    const allOnlineUsers = useSelector(selectAllOnlineUsers)
    let isOnlie = allOnlineUsers.find(user=>user.userId === userId)
  return (
    <>
        {
        isOnlie 
        ?
        <div className="w-[7px] h-[7px] rounded-full bg-emerald-900 ml-1"></div>
        :
        <div className="w-[7px] h-[7px] rounded-full bg-gray-400 ml-1"></div>
        }
    </>
  )
}

export default IsOnlie