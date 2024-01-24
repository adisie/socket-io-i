import {useSelector,useDispatch} from 'react-redux'

// config
// base url
import {
    BASE_URL,
} from '../config'

// actions from slices
// home
import {
    setMainDir,
    selectMainDir,
    setUserId,
} from '../features/home/homeSlice'
// users
import {
    setIsLogin,
    selectUser,
    resetErrors,
    logout,
} from '../features/users/usersSlice'
// profiles
import {
    selecteProfiles,
} from '../features/profiles/profilesSlice'

// icons
// share
import { FaShareFromSquare } from "react-icons/fa6"
//search
import { CiSearch } from "react-icons/ci"
// images
// default user profile
import defaultUserProfile from '../assets/images/defaultes/male-profile-3.jpg'

// main
const Header = () => {
    // states from slices
    // home
    const mainDir = useSelector(selectMainDir)
    // users
    const user = useSelector(selectUser)
    // profiles
    const profiles = useSelector(selecteProfiles)

    // my profiles
    let myProfiles = profiles.find(profile=>profile?._id === user?._id)
    
    // let profile = null 
    let profile = myProfiles?.profiles.length > 0 ? myProfiles.profiles[myProfiles.profiles.length-1] : null 

    // hooks
    const dispatch = useDispatch()

    // set main dir
    const setMainDirHandler = dir => {
        if(dir === 'HOME-HOME'){
            dispatch(setMainDir('HOME'))
        }else if(dir === 'PROFILES-PROFILES'){
            dispatch(setMainDir('PROFILES'))
            dispatch(setUserId(user?._id))
        }else if(dir === 'AUTH-LOGIN'){
            dispatch(setMainDir('AUTH'))
            // set login
            dispatch(setIsLogin(true))
        }else if(dir === 'AUTH-SIGNUP'){
            dispatch(setMainDir('AUTH'))
            // set signp
            dispatch(setIsLogin(false))
        }
    }

  return (
    <header className="bg-emerald-700">
        <div className="max-w-[820px] mx-auto px-3 flex items-center justify-between text-xs text-gray-300 font-serif py-[.5rem]">
            {/* site logo */}
            <button className="text-2xl" 
                onClick={()=>{
                    setMainDirHandler('HOME-HOME')
                }}
            >
                <FaShareFromSquare />
            </button>
            {/* search bar */}
            <div className="flex items-center justify-center">
                {
                    mainDir === 'HOME'
                    ?
                    <div className="flex items-center bg-black bg-opacity-[.1] rounded-full px-1">
                        <CiSearch className="text-xl"/>
                        <input type="text" placeholder="username" 
                            className="focus:outline-none bg-transparent p-1"
                        />
                    </div>
                    :
                    <></>
                }
            </div>
            {
                user 
                ?
                <div className="flex items-center">
                    {/* logged in */}
                    <div className="flex items-center">
                        <span>{user?.username}</span>
                        {
                            profile 
                            ?
                            <img src={`${BASE_URL}/${profile.profilePath}`} alt="" 
                                className="w-[26px] h-[26px] rounded-full object-cover mx-1 cursor-pointer" 
                                onClick={()=>{
                                    setMainDirHandler('PROFILES-PROFILES')
                                }}
                            />
                            :
                            <img src={defaultUserProfile} alt="" 
                                className="w-[26px] h-[26px] rounded-full object-cover mx-1 cursor-pointer" 
                                onClick={()=>{
                                    setMainDirHandler('PROFILES-PROFILES')
                                    dispatch(setUserId(user._id))
                                }}
                            />
                        }
                    </div>
                    <button 
                        className="border border-gray-300 rounded-sm px-3 py-[.13rem] ml-2 transition-all ease-in-out duration-600 hover:bg-emerald-800 hover:border-gray-400" 
                        onClick={()=>{
                            dispatch(logout())
                            setMainDirHandler('HOME-HOME')
                        }}
                    >Logout</button>
                </div>
                :
                <div>
                    {/* logged out */}
                    <button 
                        className="border border-gray-300 rounded-sm px-3 py-[.13rem] ml-2 transition-all ease-in-out duration-600 hover:bg-emerald-800 hover:border-gray-400" 
                        onClick={()=>{
                            setMainDirHandler('AUTH-LOGIN')
                            dispatch(resetErrors())
                        }}
                    >Login</button>
                    <button 
                        className="border border-gray-300 rounded-sm px-3 py-[.13rem] ml-2 transition-all ease-in-out duration-600 hover:bg-emerald-800 hover:border-gray-400" 
                        onClick={()=>{
                            setMainDirHandler('AUTH-SIGNUP')
                            dispatch(resetErrors())
                        }}
                    >Signup</button>
                </div>
            }
        </div>
    </header>
  )
}

export default Header