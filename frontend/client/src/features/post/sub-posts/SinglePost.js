import { FiUser } from "react-icons/fi"
import { MdDelete } from "react-icons/md"

const SinglePost = ({message}) => {
  return (
    <div className="text-xs text-gray-900 font-serif mb-3 py-1 border-b border-black border-opacity-[.1]">
        <div className="ml-5">
            <p>
                {message}
            </p>
        </div>
        {/* ///////////////// */}
        <div className="flex items-center">
            <div className="flex items-center">
                <FiUser className="text-2xl mr-1 cursor-pointer"/>
                <span>username</span>
            </div>
            <div className="flex items-center ml-5">
                <button className="text-xl opacity-[.3]">
                    <MdDelete />
                </button>
            </div>
        </div>
    </div>
  )
}

export default SinglePost