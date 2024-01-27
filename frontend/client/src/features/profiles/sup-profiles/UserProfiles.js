import {useState} from 'react'
import {useSelector} from 'react-redux'
import {BASE_URL} from '../../../config'

// actions from slices
// profiles
import {
    selectProfiles,
} from '../profilesSlice'
// home
import {
    selectUserIdProfiles,
} from '../../home/homeSlice'
// users
import {
    selectUser,
} from '../../users/usersSlice'

// icons
// delete 
import { AiOutlineDelete } from "react-icons/ai"
// image
import { CiImageOn } from "react-icons/ci"
// left arrow
import { FiArrowLeftCircle } from "react-icons/fi"
// right arrow
import { FiArrowRightCircle } from "react-icons/fi"

// images
// default images 
import defaultUserProfile from '../../../assets/images/defaults/male-profile-3.jpg'
// testUserProfile
import testUserProfile from '../../../assets/images/defaults/tewodiros1.jpg'

// *************************
// main
const UserProfiles = () => {
    
    // states from slices
    // home
    const userId = useSelector(selectUserIdProfiles)
    // users
    const user = useSelector(selectUser)

  // profiles
  const profiles = useSelector(selectProfiles)
  let userProfiles = profiles.find(userProfiles=>userProfiles._id === userId)
  
  let authorProfiles = userProfiles?.profiles?.length > 0 ? userProfiles.profiles : null  
  
  // local states
  const [currentIndex,setCurrentIndex] = useState(authorProfiles?.length > 0 ? authorProfiles?.length -1 : NaN)

  return (
    <div className="flex justify-center">
        <div className="relative">
            <div>
                {
                    authorProfiles 
                    ?
                    <img src={`${BASE_URL}/${authorProfiles[currentIndex]?.profilePath}`} alt="user profile" 
                        className="w-[100px] h-[100px] rounded-full"
                    />
                    :
                    <img src={defaultUserProfile} alt="user profile" 
                        className="w-[100px] h-[100px] rounded-full"
                    />
                }
            </div>
            {
                user?._id === userId && authorProfiles?.length > 0
                ?
                <button 
                    className="absolute top-0 right-0 text-xl text-emerald-800"
                >
                    <AiOutlineDelete />
                </button>
                :
                <></>
            }
            <div className="flex items-center justify-center my-1 text-emerald-700 text-xl">
                {/* buttons */}
                {
                    authorProfiles?.length > 1
                    ?
                    <button className="mr-1">
                        <FiArrowLeftCircle />
                    </button>
                    :
                    <></>
                }
                <input type="file" name="profile" id="profile" hidden accept="image/*" />
                {
                    user?._id === userId 
                    ?
                    <label htmlFor="profile"
                        className="cursor-pointer text-2xl" 
                    >
                        <CiImageOn />
                    </label>
                    :
                    <></>
                }
                {
                    authorProfiles?.length > 1
                    ?
                    <button className="ml-1">
                        <FiArrowRightCircle />
                    </button>
                    :
                    <></>
                }
            </div>
        </div>
    </div>
  )
}

export default UserProfiles