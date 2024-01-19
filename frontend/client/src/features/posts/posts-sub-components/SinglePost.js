// icons
// user
import { RiUser6Line } from "react-icons/ri"
// delete
import { AiOutlineDelete } from "react-icons/ai"

// main
const SinglePost = () => {
  return (
    <div className="mb-5 border-b border-black border-opacity-[.1] text-xs font-serif opacity-[.85] pb-2">
        <div className="ml-5 mb-1">
            <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi exercitationem vitae modi rerum magnam ut quia placeat reprehenderit porro consectetur alias delectus quae atque, voluptatum et tempora est qui officiis voluptas! Quam in iusto illo tempora explicabo itaque beatae repudiandae nisi blanditiis fuga deserunt mollitia accusantium veniam molestiae harum consequatur nam, quos corporis ea deleniti provident? Itaque minima eius.
            </p>
        </div>
        {/* author controls */}
        <div className="flex items-center"> 
            <div className="flex items-center">
                <RiUser6Line className="text-2xl opacity-[.75]"/>
                <span>author name</span>
                <div className="w-[7px] h-[7px] rounded-full bg-black ml-1"></div>
            </div>
            <div className="ml-3 flex items-center">
                <button className="text-lg mx-2 opacity-[.5]">
                    <AiOutlineDelete />
                </button>
                <span className="italic">date: 12-5-10</span>
            </div>
        </div>
    </div>
  )
}

export default SinglePost