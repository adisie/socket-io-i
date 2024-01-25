
// icons
// search
import { FiSearch } from "react-icons/fi"

// ***************************
// main
const PostsSearchBar = () => {
  return (
    <div className="flex items-center px-3 py-1 rounded-full bg-black bg-opacity-[.3]">
        <FiSearch className="text-xl opacity-[.7] mr-1"/>
        <input type="text" placeholder="username..." 
            className="focus:outline-none bg-transparent"
        />
    </div>
  )
}

export default PostsSearchBar