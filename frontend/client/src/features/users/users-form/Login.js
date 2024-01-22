import { useState } from "react"
import {useDispatch} from 'react-redux'

// actions from slices
// users
import {
  setIsLogin,
} from '../usersSlice'

// main
const Login = () => {
  // local states
  // username
  const [username,setUsername] = useState('')
  // password
  const [password,setPassword] = useState('')

  // hooks
  const dispatch = useDispatch()

  // submit handler
  const submitHandler = () => {
    const usernameError = document.getElementById('login-username-error')
    const passwordError = document.getElementById('login-password-error')
    if(!username.trim() && !password){
      usernameError.textContent = 'username required' 
      passwordError.textContent = 'password required'
    }else if(username.trim() && !password){
      usernameError.textContent = ''
      passwordError.textContent = 'password required'
    }else if(!username.trim() && password){
      usernameError.textContent = 'username required'
      passwordError.textContent = ''
    }else if(username.trim() && password){
      usernameError.textContent = ''
      passwordError.textContent = ''
      console.log({username,password})
    }
  }

  return (
    <div>
      <div className="flex flex-col bg-black bg-opacity-[.1] rounded-sm px-12 py-5 text-xs text-emerald-950 font-serif">
        <div className="flex items-center justify-center text-lg font-bold my-1">
          <span>Login</span>
        </div>
        {/* username */}
        <div className="mb-[.75rem]">
          <div className="bg-white rounded-sm flex items-center px-3">
            <input type="text" name="username" placeholder="username" 
              className="focus:outline-none bg-transparent py-[.35rem] w-[170px]" 
              value={username} 
              onChange={e=>setUsername(e.target.value)} 
            />
          </div>
          <div className="flex items-center justify-center text-red-800" id="login-username-error"></div>
        </div>
        {/* password */}
        <div className="mb-[.75rem]">
          <div className="bg-white rounded-sm flex items-center px-3">
            <input type="password" name="password" placeholder="password" 
              className="focus:outline-none bg-transparent py-[.35rem] w-[170px]" 
              value={password} 
              onChange={e=>setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-center text-red-800" id="login-password-error"></div>
        </div>
        <div className="flex items-center justify-center cursor-pointer text-gray-300 bg-emerald-700 rounded-sm transition-all ease-in-out duration-300 hover:bg-emerald-800 mb-[.5rem]"
          onClick={submitHandler}
        >
          <span className="my-[.25rem]">Login</span>
        </div>
        <div>
          <span  className="cursor-pointer opacity-[.75] hover:underline hover:opacity-[1]" 
            onClick={()=>{
              dispatch(setIsLogin(false))
            }}
          >no account?</span>
        </div>
      </div>
    </div>
  )
}

export default Login