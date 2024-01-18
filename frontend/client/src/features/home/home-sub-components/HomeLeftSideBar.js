import { useSelector } from "react-redux"

// actons from slices
// users slice
import {
  selectAllUsers,
} from '../../users/usersSlice'
// icons
// user icon
import { MdAccountCircle } from "react-icons/md"

// main functons
const HomeLeftSideBar = () => {
  // states from slices
  // users
  const allUsers = useSelector(selectAllUsers) 

  return (
    <div className="w-[30%] min-w-[180px] max-h-[93vh] overflow-y-auto flex justify-end pr-9">
      <ul className="flex-grow">
        {
          allUsers.map(user=>(
          <li key={user._id} className="flex items-center text-xs text-emerald-900 font-serif p-1 cursor-pointer mb-3 border-b border-emerald-900 border-opacity-[.1]">
            <MdAccountCircle className="text-2xl"/>
            <span>{user.username}</span>
            {
              !true 
              ?
              <div className="w-[7px] h-[7px] rounded-full bg-emerald-900 ml-1"></div>
              :
              <div className="w-[7px] h-[7px] rounded-full bg-gray-400 ml-1"></div>
            }
          </li>
          ))
        }
      </ul>     
    </div>
  )
}

export default HomeLeftSideBar