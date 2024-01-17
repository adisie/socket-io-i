
import { FiUser } from "react-icons/fi"

const PostLeftSideBar = () => {
  return (
    <div className='w-[35%] bg-gray-100 max-h-[100vh] overflow-y-auto'>
      <ul>
        <li className="m-2 p-1 border-b border-black border-opacity-[.1] flex items-center text-xs cursor-pointer">
          <FiUser className="text-2xl mr-1"/>
          <span>username</span>
        </li>
        <li className="m-2 p-1 border-b border-black border-opacity-[.1] flex items-center text-xs cursor-pointer">
          <FiUser className="text-2xl mr-1"/>
          <span>username</span>
        </li>
        <li className="m-2 p-1 border-b border-black border-opacity-[.1] flex items-center text-xs cursor-pointer">
          <FiUser className="text-2xl mr-1"/>
          <span>username</span>
        </li>
      </ul>
    </div>
  )
}

export default PostLeftSideBar