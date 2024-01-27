import {useDispatch} from 'react-redux'

// actions from slices
// homeSlice
import {
    setMainDir,
    setUserIdProfiles,
} from '../../features/home/homeSlice'
// usersSlice
import {
    logout,
} from '../../features/users/usersSlice'

// images
// defaults
import defaultUserProfile from '../../assets/images/defaults/male-profile-3.jpg'
// test
import testUserProfile from '../../assets/images/defaults/tewodiros1.jpg'

// ************************
// main
const LoginHeader = ({user}) => {
    // hooks
    const dispatch = useDispatch()

  return (
    <div className="flex items-center">
        {/* ****** username and profile ******** */}
        <div className="flex items-center">
            <span className="text-xs">{user?.username}</span>
            {
                true 
                ?
                <img src={testUserProfile} alt="user profile" 
                    className="w-[24px] h-[24px] rounded-full cursor-pointer mx-1" 
                    onClick={()=>{
                        dispatch(setMainDir("PROFILES"))
                        dispatch(setUserIdProfiles(user._id))
                    }}
                />
                :
                <img src={defaultUserProfile} alt="user profile" 
                    className="w-[24px] h-[24px] rounded-full cursor-pointer mx-1" 
                    onClick={()=>{
                        dispatch(setMainDir("PROFILES"))
                        dispatch(setUserIdProfiles(user._id))
                    }}
                />
            }
        </div>
        {/* ******* logout button ******* */}
        <button 
            className="border border-gray-300 px-3 py-[.05rem] rounded-sm ml-1 transition-all ease-in-out duration-500 hover:bg-white hover:bg-opacity-[.15]"
            onClick={()=>{
                dispatch(logout())
                dispatch(setUserIdProfiles(null))
                dispatch(setMainDir('HOME'))
            }}
        >Logout</button>
    </div>
  )
}

export default LoginHeader