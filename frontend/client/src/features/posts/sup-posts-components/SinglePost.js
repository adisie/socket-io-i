// icons
// delete
import { RiDeleteBinLine } from "react-icons/ri"

// sub pages
// get username
import GetUsername from "../../users/users-form/GetUsername"
// get profiles
import GetProfile from "../../users/users-form/GetProfile"
// IsOnlie
import IsOnline from "../../users/users-form/IsOnline"

// main
const SinglePost = () => {
  return (
    <div className="border-b border-emerald-700 border-opacity-[.15] mb-3 text-xs font-serif opacity-[.85]">
        <div className="pl-7"> 
            <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate mollitia illo dolorem sit earum, eligendi debitis aut, error temporibus ratione ex impedit perspiciatis officiis nostrum minus modi, molestias voluptatibus. Veritatis rem, dolore reiciendis quam nulla sed beatae aperiam facilis. Eaque, id beatae? Doloribus repellendus velit, labore ullam vel eum perspiciatis. Aspernatur nulla, aliquam reprehenderit et similique facilis tempora? Modi maiores soluta maxime mollitia dolore ab sed voluptates quos, a inventore illo exercitationem explicabo quia ex ratione impedit nostrum esse deserunt ipsum fuga provident optio veniam possimus architecto! Ea mollitia laborum accusantium aperiam illum nulla quos ducimus inventore rerum explicabo. Enim!
            </p>
        </div>
        <div className="flex items-center my-1">
            <div className="flex items-center cursor-pointer">
                <GetProfile />
                <span className="mr-1">
                    <GetUsername />
                </span>
                <IsOnline />
            </div>
            {
                true && <button className="text-xl mx-1 opacity-[.65]">
                    <RiDeleteBinLine />
                </button>
            }
            <span>date</span>
        </div>
    </div>
  )
}

export default SinglePost