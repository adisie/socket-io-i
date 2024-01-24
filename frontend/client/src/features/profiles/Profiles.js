import { useState } from 'react'
import {useSelector} from 'react-redux'

// base url
import {BASE_URL} from '../../config'

// actions from slices
// profiles
import {
  selecteProfiles,
} from './profilesSlice'
// users
import {
  selectUser,
} from '../users/usersSlice'

// default profile image
import defaultProfile from '../../assets/images/defaultes/male-profile-3.jpg'
// test profile
import testProfile from '../../assets/images/defaultes/tewodiros1.jpg'

// icons
// delete
import { AiFillDelete } from "react-icons/ai"
// arrows
import { IoMdArrowDropleft } from "react-icons/io"
import { IoMdArrowDropright } from "react-icons/io";
// image
import { BiSolidImageAdd } from "react-icons/bi"

// main
const Profiles = () => {
  // state from slices
  // users
  const user = useSelector(selectUser)
  // profiles
  const profiles = useSelector(selecteProfiles)

  // my profiles
  let myProfiles = profiles.find(profile=>profile._id === user?._id)

  // profiles
  let allMyProfiles = myProfiles?.profiles.length > 0  ? myProfiles?.profiles : null 
  
  // states
  const [currentIndex,setCurrentIndex] = useState(allMyProfiles?.length-1)

  // image slider
  const imageNavigator = index => {
    if(index > 0){
      if(currentIndex > 0){
        setCurrentIndex(currentIndex -1)
      }else{
        setCurrentIndex(allMyProfiles?.length -1)
      }
    }else {
      if(currentIndex === allMyProfiles?.length - 1){
        setCurrentIndex(0)
      }else {
        setCurrentIndex(currentIndex + 1)
      }
    }
  }

  return (
    <div className="flex-grow flex justify-center pt-12">
      <div className="flex justify-center">
        <div className="relative w-full">
          <div>
            {
              allMyProfiles 
              ?
              <img src={`${BASE_URL}/${allMyProfiles[currentIndex].profilePath}`} 
                className="w-[250px] h-[250px] object-cover rounded-full" 
                alt="user profile"
               />
              :
              <>
              <input type="file" name="profile-img" id="profile-img" accept="image/*" hidden />
              <label htmlFor="profile-img">
                <img src={defaultProfile} 
                  className="w-[250px] h-[250px] object-cover rounded-full cursor-pointer" 
                  alt="user profile"
                />
              </label>
              </>
            }
          </div>
          {
            allMyProfiles 
            ?
            <button className="absolute top-0 right-0 text-2xl text-emerald-950 opacity-[.75]" 
            >
              <AiFillDelete />
            </button>
            :
            <></>
          }
          <div className="flex items-center justify-center opacity-[.75]" >
            {
              allMyProfiles?.length > 1 
              ?
              <button 
                className="text-3xl text-emerald-950" 
                onClick={()=>imageNavigator(-1)}
              >
                <IoMdArrowDropleft />
              </button>
              :
              <></>
            }
            {/* new profile */}
            <input type="file" name="profile" id="profile" hidden accept="image/*" />
            <label htmlFor="profile" 
              className="text-3xl text-emerald-950 cursor-pointer"
            >
              <BiSolidImageAdd />
            </label>
            {
              allMyProfiles?.length > 1 
              ?
              <button 
                className="text-3xl text-emerald-950" 
                onClick={()=>imageNavigator(1)}
              >
                <IoMdArrowDropright />
              </button>
              :
              <></>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profiles