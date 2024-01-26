import {useDispatch} from 'react-redux'

// actions from slice
// homeSlice
import {
  setMainDir,
} from '../../features/home/homeSlice'
// usersSlice
import {
  setIsLogin,
} from '../../features/users/usersSlice'

// *************************
// main
const LogoutHeader = () => {
  // hooks
  const dispatch = useDispatch()
  // setMainDirHandler
  const setMainDirHandler = dir => {
    if(dir === "AUTH-LOGIN"){
      dispatch(setMainDir("AUTH"))
      // login setting
      dispatch(setIsLogin(true))
    }else if(dir === "AUTH-SIGNUP"){
      dispatch(setMainDir("AUTH"))
      // singup setting
      dispatch(setIsLogin(false))
    }
  }
  return (
    <div className="flex items-center">
        {/* ***** login and signup buttons */}
        <button 
            className="border border-gray-300 px-3 py-[.05rem] rounded-sm ml-1 transition-all ease-in-out duration-500 hover:bg-white hover:bg-opacity-[.15]" 
            onClick={()=>{
              setMainDirHandler("AUTH-LOGIN")
            }}
        >Login</button>
        <button 
            className="border border-gray-300 px-3 py-[.05rem] rounded-sm ml-3 transition-all ease-in-out duration-500 hover:bg-white hover:bg-opacity-[.15]" 
            onClick={()=>{
              setMainDirHandler("AUTH-SIGNUP")
            }}
        >Signup</button>
    </div>
  )
}

export default LogoutHeader