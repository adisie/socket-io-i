import {useState} from 'react'
import {useDispatch} from 'react-redux'

// actions from slices
// users
import {
  setIsLogin,
} from '../usersSlice'

// main 
const Signup = () => {
  // local states
  // username
  const [username,setUsername] = useState('')
  // password
  const [password,setPassword] = useState('')

  // hooks
  const dispatch = useDispatch()

  // submit handler
  const submitHandler = () => {
    const usernameError = document.getElementById('signup-username-error')
    const passwordError = document.getElementById('signup-password-error')
    if(!username.trim() && !password){
      usernameError.textContent = 'username required'
      passwordError.textContent = 'password required'
    }else if(username.trim() && !password){
      usernameError.textContent = ''
      passwordError.textContent = 'password required'
    }else if(!username.trim() && password){
      usernameError.textContent = 'username required'
      passwordError.textContent = ''
    }else if(username.trim() && password.length < 3){
      usernameError.textContent = ''
      passwordError.textContent = 'too short password'
    }else if(username.trim() && password){
      usernameError.textContent = '' 
      passwordError.textContent = ''
      console.log({username,password})
    }
  }

  return (
    <div className="pt-7">
      <form className="px-7 py-3 text-xs font-serif text-gray-700 bg-black bg-opacity-[.15] rounded-sm flex flex-col">
        <div className="my-2 text-center text-lg font-bold">
          <span>Signup</span>
        </div>
        {/* username */}
        <div className='mb-2'>
          <div className='bg-white px-3 rounded-sm py-[.25rem] flex items-center'>
            <input type="text" name="username" placeholder="username" 
              className="bg-transparent focus:outline-none" 
              value={username} 
              onChange={e=>setUsername(e.target.value)} 
            />
          </div>
          <div className='text-center text-[.7rem]' id='signup-username-error'></div>
        </div>
        {/* password */}
        <div className='mb-2'>
          <div className='bg-white px-3 rounded-sm py-[.25rem] flex items-center'>
            <input type="password" name="password" placeholder="password" 
              className="bg-transparent focus:outline-none" 
              value={password} 
              onChange={e=>setPassword(e.target.value)} 
            />
          </div>
          <div className='text-center text-[.7rem]' id='signup-password-error'></div>
        </div>
        <div className='rounded-sm bg-gray-900 text-white flex items-center justify-center py-[.25rem] transition-all ease-in-out duration-1000 hover:bg-gray-700 cursor-pointer' 
          onClick={submitHandler}
        >
          Signup
        </div>
        <div className='my-3 cursor-pointer hover:underline text-gray-500' 
          onClick={()=>{
            dispatch(setIsLogin(true))
          }}
        >
          hav an account?
        </div>
      </form>
    </div>
  )
}

export default Signup