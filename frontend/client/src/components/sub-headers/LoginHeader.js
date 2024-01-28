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

// get author profile
import GetAuthorProfile from '../../features/profiles/sup-profiles/GetAuthorProfile'

// ************************
// main
const LoginHeader = ({user}) => {
    // hooks
    const dispatch = useDispatch()

  return (
    <div className="flex items-center">
        {/* ****** username and profile ******** */}
        <div className="flex items-center cursor-pointer" 
            onClick={()=>{
                dispatch(setMainDir("PROFILES"))
                dispatch(setUserIdProfiles(user._id))
            }}
        >
            <span className="text-xs mr-1">{user?.username}</span>
            <GetAuthorProfile userId={user._id}/>
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