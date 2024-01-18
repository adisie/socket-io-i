import {useState} from 'react'
import {useDispatch} from 'react-redux'

// actions from slices
// users
import {
  setIsLogin,
} from '../usersSlice'


// main function
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
    let passwordError = document.getElementById('signup-password-error')
    if(username.trim() && password) {
      console.log({username,password})
      passwordError.textContent = ''
    }else {
      console.log('field required')
      passwordError.textContent = 'fill all fields'
    }
    setUsername('')
    setPassword('')
  }

  return (
    <div className='mt-3 px-7'>
      <div>
        <form className='bg-gray-200 py-3 px-9 rounded-sm flex flex-col text-xs text-emerald-900 font-serif'>
          <div className='text-lg text-center my-2 font-bold'>
            <span>Signup</span>
          </div>
          {/* username */}
          <div className='mb-2'>
            <div className='px-3 py-[.13rem] rounded-sm bg-white'>
              <input type="text" name="username" placeholder="username" 
                className='focus:outline-none bg-transparent py-[.13rem]'
                value={username} 
                onChange={e=>setUsername(e.target.value)}
              />
            </div>
            <div className='italic text-red-700 text-center text-[.7rem]'></div>
          </div>
          {/* password */}
          <div className='mb-2'>
            <div className='px-3 py-[.13rem] rounded-sm bg-white'>
              <input type="password" name="password" placeholder="password" 
                className='focus:outline-none bg-transparent py-[.13rem]'
                value={password} 
                onChange={e=>setPassword(e.target.value)}
              />
            </div>
            <div className='italic text-red-700 text-center text-[.7rem]' id="signup-password-error"></div>
          </div>
          <div className='flex items-center'>
            <div className='flex-grow text-center text-gray-200 bg-emerald-700 rounded-sm cursor-pointer py-[.25rem] mb-2 transition-all ease-in-out duration-500 hover:bg-emerald-600' 
              onClick={submitHandler}
            >Signup</div>
          </div>
          <div>
            <div className='text-gray-500 hover:underline cursor-pointer' 
              onClick={()=>{
                dispatch(setIsLogin(true))
              }}
            >have an account?</div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup