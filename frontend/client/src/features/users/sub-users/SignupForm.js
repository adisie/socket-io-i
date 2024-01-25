import {useState} from 'react'
import {useDispatch} from 'react-redux'

// actions from slices
// usersSlice
import {
  setIsLogin,
} from '../usersSlice'

// ***********************
// main
const SignupForm = () => {
  // local state
  // username
  const [username,setUsername] = useState("")
  // password
  const [password,setPassword] = useState("")

  // hooks
  const dispatch = useDispatch()

  // submitHandler
  const submitHandler = () => {
    let usernameError = document.getElementById("signup-username-error")
    let passwordError = document.getElementById("signup-password-error")
    if(!username.trim() && !password){
      usernameError.textContent = "username required"
      passwordError.textContent = "password required"
    }else if(username.trim() && !password){
      usernameError.textContent = ""
      passwordError.textContent = "password required"
    }else if(!username.trim() && password){
      usernameError.textContent = "username required" 
      passwordError.textContent = ""
    }else if(username.trim() && password){
      usernameError.textContent = ""
      passwordError.textContent = ""
      console.log({username,password})
    }else{
      console.log("Signup Validation Error")
    }
  }

  return (
    <div>
      <form className="bg-black bg-opacity-[.15] rounded-sm px-5 py-3 flex flex-col text-xs font-serif mt-7">
        <div className="flex items-center justify-center text-lg font-bold my-1">
          <span>Signup</span>
        </div>
        {/* username */}
        <div className="mb-[.75rem]">
          <div className="bg-white rounded-sm px-3 py-[.35rem]">
            <input type="text" name="username" placeholder="username" 
              className="focus:outline-none w-[170px] bg-transparent" 
              value={username} 
              onChange={e=>setUsername(e.target.value)} 
            />
          </div>
          <div className="flex items-center justify-center text-[.675rem] italic" id="signup-username-error"></div>
        </div>
        {/* password */}
        <div className="mb-[.75rem]">
          <div className="bg-white rounded-sm px-3 py-[.35rem]">
            <input type="password" name="password" placeholder="password" 
              className="focus:outline-none w-[170px] bg-transparent" 
              value={password} 
              onChange={e=>setPassword(e.target.value)} 
            />
          </div>
          <div className="flex items-center justify-center text-[.675rem] italic" id="signup-password-error"></div>
        </div>
        {/* button */}
        <div className="mb-[.5rem]">
          <div
            className="bg-emerald-700 rounded-sm px-3 py-[.35rem] flex items-center justify-center text-gray-300 cursor-pointer transition-all ease-in-out duration-500 hover:bg-emerald-600 hover:text-gray-100" 
            onClick={submitHandler}
          >
            <span>Signup</span>
          </div>
        </div>
        {/* link */}
        <div className="my-3 mx-1 text-gray-700">
          <span className="cursor-pointer hover:underline" 
            onClick={()=>{
              dispatch(setIsLogin(true))
            }}
          >have an account?</span>
        </div>
      </form>
    </div>
  )
}

export default SignupForm