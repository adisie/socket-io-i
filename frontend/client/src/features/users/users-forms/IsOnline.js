import { useSelector } from 'react-redux'

// actions from slices
// users
import {
    selectOnlineUsers,
} from '../usersSlice'

const IsOnline = ({userId}) => {
    // states from slices
    // users
    const onlineUsers = useSelector(selectOnlineUsers)
    let user = onlineUsers.find(us=>us.userId===userId)
    
  return (
    <>
    {
        user 
        ?
        <div className="w-[7px] h-[7px] rounded-full bg-black ml-1"></div>
        :
        <></>
    }
    </>
  )
}

export default IsOnline