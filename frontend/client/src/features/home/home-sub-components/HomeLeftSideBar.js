import { useSelector } from "react-redux"

// actons from slices
// users slice
import {
  selectAllUsers,
  selectAllOnlineUsers,
} from '../../users/usersSlice'
// icons
// user icon
import { MdAccountCircle } from "react-icons/md"

// sub - component
// is online component
import IsOnlie from "./IsOnlie"

// main functons
const HomeLeftSideBar = () => {
  // states from slices
  // users
  const allUsers = useSelector(selectAllUsers) 
  const allOnlineUsers = useSelector(selectAllOnlineUsers)


  return (
    <div className="w-[30%] min-w-[120px] max-h-[93vh] overflow-y-auto flex justify-end pr-9">
      <ul className="flex-grow">
        {
          allUsers.map(user=>(
          <li key={user._id} className="flex items-center text-xs text-emerald-900 font-serif p-1 cursor-pointer mb-3 border-b border-emerald-900 border-opacity-[.1]">
            <MdAccountCircle className="text-2xl"/>
            <span>{user.username}</span>
            {/* is online */}
            <IsOnlie userId={user._id}/>
          </li>
          ))
        }
      </ul>     
    </div>
  )
}

export default HomeLeftSideBar