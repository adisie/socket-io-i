

// icons
// delete 
import { AiOutlineDelete } from "react-icons/ai"
// image
import { CiImageOn } from "react-icons/ci"
// left arrow
import { MdArrowCircleLeft } from "react-icons/md"
import { FiArrowLeftCircle } from "react-icons/fi"
// right arrow
import { MdArrowCircleRight } from "react-icons/md"
import { FiArrowRightCircle } from "react-icons/fi"

// images
// default images 
import defaultUserProfile from '../../../assets/images/defaults/male-profile-3.jpg'
// testUserProfile
import testUserProfile from '../../../assets/images/defaults/tewodiros1.jpg'

// *************************
// main
const UserProfiles = () => {
  return (
    <div className="flex justify-center">
        <div className="relative">
            <div>
                <img src={testUserProfile} alt="user profile" 
                    className="w-[100px] h-[100px] rounded-full"
                />
            </div>
            <button 
                className="absolute top-0 right-0 text-xl text-emerald-800"
            >
                <AiOutlineDelete />
            </button>
            <div className="flex items-center justify-center my-1 text-emerald-700 text-xl">
                {/* buttons */}
                <button className="mr-1">
                    <FiArrowLeftCircle />
                </button>
                <input type="file" name="profile" id="profile" hidden accept="image/*" />
                <label htmlFor="profile"
                    className="cursor-pointer text-2xl" 
                >
                    <CiImageOn />
                </label>
                <button className="ml-1">
                    <FiArrowRightCircle />
                </button>
            </div>
        </div>
    </div>
  )
}

export default UserProfiles