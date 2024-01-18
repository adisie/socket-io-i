
// icons
// user icon
import { MdAccountCircle } from "react-icons/md"
// delete
import { AiFillDelete } from "react-icons/ai"

const SinglePost = () => {
  return (
    <div className="text-emerald-950 text-xs font-serif my-3 border-b border-emerald-950 border-opacity-[.13] mb-7">
        <div className="ml-5">
            <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptates quibusdam blanditiis sunt minus excepturi quisquam. Doloribus a quod error saepe, quo vero esse similique. Quaerat dolore tempora sequi, esse nisi, fugit reiciendis deleniti dignissimos sed maxime eos vitae recusandae ab mollitia animi odit hic! Nobis nostrum quidem non omnis.
            </p>
        </div>
        <div className="flex items-center py-1">
            <div className="flex items-center mr-3">
                <MdAccountCircle className="text-2xl "/>
                <span>Haddis</span>
            </div>
            <div>
                <button className="text-xl opacity-[.3] mx-3">
                    <AiFillDelete />
                </button>
                <span className="italic">date: 12-07-2016</span>
            </div>
        </div>
    </div>
  )
}

export default SinglePost