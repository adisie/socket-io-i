// sub -components
import IsOnline from '../../users/sub-users/IsOnline'
import GetAuthorProfile from '../../profiles/sup-profiles/GetAuthorProfile'

// icons
// delete
import { AiOutlineDelete } from "react-icons/ai"

// **************************
// main
const SingleComment = () => {
  return (
    <div className="mb-3">
        <div className="ml-7 text-xs text-gray-200 bg-emerald-700 max-w-[450px] rounded-sm p-2">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, possimus ipsa alias voluptates dolore asperiores est aspernatur at nobis tempore modi ab tenetur velit in suscipit? Beatae esse voluptatem ut. Similique, quibusdam.
            </p>
        </div>
        <div className=' flex items-center my-1'>
            <GetAuthorProfile />
            <span>username</span>
            <IsOnline />
            <button className="mx-1 text-lg opacity-[.65]">
                <AiOutlineDelete />
            </button>
            <span className="ml-1 italic">date</span>
        </div>
    </div>
  )
}

export default SingleComment