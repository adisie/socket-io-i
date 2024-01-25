import {useDispatch} from 'react-redux'

// actions from slices
// homeSlice
import {
    setMainDir,
} from '../../features/home/homeSlice'

// images
// defaults
import defaultUserProfile from '../../assets/images/defaults/male-profile-3.jpg'
// test
import testUserProfile from '../../assets/images/defaults/tewodiros1.jpg'

// ************************
// main
const LoginHeader = () => {
    // hooks
    const dispatch = useDispatch()
  return (
    <div className="flex items-center">
        {/* ****** username and profile ******** */}
        <div className="flex items-center">
            <span className="text-xs">username</span>
            {
                true 
                ?
                <img src={testUserProfile} alt="user profile" 
                    className="w-[24px] h-[24px] rounded-full cursor-pointer mx-1" 
                    onClick={()=>{
                        dispatch(setMainDir("PROFILES"))
                    }}
                />
                :
                <img src={defaultUserProfile} alt="user profile" 
                    className="w-[24px] h-[24px] rounded-full cursor-pointer mx-1" 
                    onClick={()=>{
                        dispatch(setMainDir("PROFILES"))
                    }}
                />
            }
        </div>
        {/* ******* logout button ******* */}
        <button 
            className="border border-gray-300 px-3 py-[.1rem] rounded-sm ml-1 transition-all ease-in-out duration-500 hover:bg-white hover:bg-opacity-[.15]"
        >Logout</button>
    </div>
  )
}

export default LoginHeader