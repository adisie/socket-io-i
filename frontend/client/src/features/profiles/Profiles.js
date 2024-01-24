import {useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {io} from 'socket.io-client'
import {BASE_URL} from '../../config'

// actions from slices
// profiles
import {
  addNewProfile,
  addNewProfileEvent,
  deleteProfile,
  selecteProfiles,
  getAllProfiles,
} from './profilesSlice'
// home
import {
  selectUserId,
} from '../home/homeSlice'
// users
import {
  selectUser,
} from '../users/usersSlice'

// default profile image
import defaultProfile from '../../assets/images/defaultes/male-profile-3.jpg'

// icons
// delete
import { AiFillDelete } from "react-icons/ai"
// arrows
import { IoMdArrowDropleft } from "react-icons/io"
import { IoMdArrowDropright } from "react-icons/io";
// image
import { BiSolidImageAdd } from "react-icons/bi"

// socket
const socket = io('ws://localhost:5000')

// main
const Profiles = () => {
  // states from slices
  // home
  const userId = useSelector(selectUserId)
  // users
  const user = useSelector(selectUser)
  // profiles
  let allProfiles = useSelector(selecteProfiles)

  
  let allUserProfiles = allProfiles.find(allProfile=>allProfile._id === userId)
  let profiles = allUserProfiles.profiles
  
  const [currentIndex,setCurrentIndex] = useState(profiles.length ? profiles.length -1 : null)

  // effects
  // new profile event
  useEffect(()=>{
    socket.on('newProfileImageFromServer',data=>{
      dispatch(addNewProfileEvent(data))
    })
  })

  // delete profile event 
  useEffect(()=>{
    socket.on('deleteProfielEventFromServer',data=>{
      console.log(data)
    })
  })

  // image navigator
  const imageNavigator = index => {
    if(index > 0){
      if(currentIndex > 0){
        setCurrentIndex(currentIndex - 1)
      }else{
        setCurrentIndex(profiles.length - 1)
      }
    }else {
      if(currentIndex === 0 ){
        setCurrentIndex(profiles.length - 1)
      }else{
        setCurrentIndex(currentIndex - 1)
      }
    }
  }

  // hooks
  const dispatch = useDispatch()

  // submit handler
  const submitHandler = e => {
    let formData = new FormData()
    formData.append('profile',e.target.files[0])
    dispatch(addNewProfile(formData))
  }

  return (
    <div className="flex-grow flex justify-center pt-12">
      <div className="flex justify-center">
        <div className="relative w-full">
          <div>
            {
              profiles.length > 0
              ?
              <img src={`${BASE_URL}/${profiles[currentIndex]?.profilePath}`} 
                className="w-[250px] h-[250px] object-cover rounded-full" 
                alt="user profile"
               />
              :
              <>
              {
                user?._id === userId && <input type="file" name="profile-img" id="profile-img" accept="image/*" hidden 
                onChange={submitHandler}
              />
              }
              
              <label htmlFor="profile-img">
                <img src={defaultProfile} 
                  className={user?._id === userId ? "w-[250px] h-[250px] object-cover rounded-full cursor-pointer" : "w-[250px] h-[250px] object-cover rounded-full"}
                  alt="user profile"
                />
              </label>
              </>
            }
          </div>
          {
            user?._id === userId && profiles.length > 0
            ?
            <button className="absolute top-0 right-0 text-2xl text-emerald-950 opacity-[.75]"  
              onClick={()=>{
                setCurrentIndex(profiles.length > 0 && currentIndex > 0 ? currentIndex - 1 : null)
                dispatch(deleteProfile(profiles[currentIndex]._id))
              }}
            >
              <AiFillDelete />
            </button>
            :
            <></>
          }
          <div className="flex items-center justify-center opacity-[.75]" >
            {
              profiles.length > 1
              ?
              <button 
                className='text-3xl' 
                onClick={()=>imageNavigator(-1)}
              >
                <IoMdArrowDropleft />
              </button>
              :
              <></>
            }
            {/* new profile */}
            <input type="file" name="profile" id="profile" hidden accept="image/*" 
              onChange={submitHandler}
            />
            {
              user?._id === userId 
              ?
              <label htmlFor="profile" 
                className="text-3xl text-emerald-950 cursor-pointer"
              >
                <BiSolidImageAdd />
              </label>
              :
              <></>
            }
            {
              profiles.length > 1
              ?
              <button 
                className='text-3xl' 
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