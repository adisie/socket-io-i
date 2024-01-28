import {useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {BASE_URL} from '../../../config'

// actions from slices
// profiles
import {
    selectProfiles,
    addNewUserProfile,
    deleteProfile,
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

// left arrow
import { FiArrowLeftCircle } from "react-icons/fi"
// right arrow
import { FiArrowRightCircle } from "react-icons/fi"
// image
import { CiImageOn } from "react-icons/ci"



// images
// default images 
import defaultUserProfile from '../../../assets/images/defaults/male-profile-3.jpg'



// *************************
// main
const UserProfiles = () => {
    const dispatch = useDispatch()
    // states from slices
    // home
    const userId = useSelector(selectUserIdProfiles)
    // users
    const user = useSelector(selectUser)

  // profiles
  let profiles = useSelector(selectProfiles)

  
  let userProfiles = profiles.find(userProfiles=>userProfiles._id === userId)
  
  let authorProfiles = userProfiles?.profiles?.length > 0 ? userProfiles.profiles : null  
  
  // local states
  const [currentIndex,setCurrentIndex] = useState(authorProfiles?.length > 0 ? authorProfiles?.length -1 : NaN)
  const [isNavMode,setIsNavMode] = useState(true) 


  // image nav
  const profileNavigator = index => {
    if(index > 0){
        if(currentIndex === 0){
            setCurrentIndex(authorProfiles?.length - 1)
        }else{
            setCurrentIndex(currentIndex-1)
        }
    }else if(index < 0){
        if(currentIndex === authorProfiles?.length -1){
            setCurrentIndex(0)
        }else {
            setCurrentIndex(currentIndex+1)
        }
    }
  }

  // submit handler
  const addNewUserProfileHandler = e => {
    let formData = new FormData()
    formData.append('profile',e.target.files[0])
    dispatch(addNewUserProfile(formData))
  }


  return (
    <div className="flex justify-center">
        <div className="relative">
            <div>
                {
                    authorProfiles 
                    ?
                    <img src={`${BASE_URL}/${authorProfiles[isNavMode ? currentIndex : authorProfiles?.length-1]?.profilePath}`} alt="user profile" 
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
                    onClick={()=>{
                        dispatch(deleteProfile(isNavMode ? authorProfiles[currentIndex]._id : authorProfiles[authorProfiles?.length-1]._id))
                        setIsNavMode(false)
                    }}
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
                    <button className="mr-1" 
                        onClick={()=>{
                            profileNavigator(-1) 
                            setIsNavMode((true))
                        }}
                    >
                        <FiArrowLeftCircle />
                    </button>
                    :
                    <></>
                }
                {/* add new profile */}
                <input type="file" name="profile" id="profile" hidden accept="image/*"  
                    onChange={addNewUserProfileHandler}
                />
                {
                    user?._id === userId 
                    ?
                    <label htmlFor="profile"
                        className="cursor-pointer text-2xl" 
                        onClick={()=>setIsNavMode(false)}
                    >
                        <CiImageOn />
                    </label>
                    :
                    <></>
                }
                {
                    authorProfiles?.length > 1
                    ?
                    <button className="ml-1" 
                        onClick={()=>{
                            profileNavigator(1)
                            setIsNavMode(true)
                        }}
                    >
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