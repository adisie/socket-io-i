import { useDispatch,useSelector } from 'react-redux'

// actions from slices
// home
import {
    setMainDir,
    selectMainDir,
} from '../features/home/homeSlice'
// users
import {
    setIsLogin,
} from '../features/users/usersSlice'

// icons
// share
import { ImShare } from "react-icons/im"
// search
import { CiSearch } from "react-icons/ci"
// user
import { RiUser4Line } from "react-icons/ri"

// main
const Header = () => {
    // states from slices
    // home
    const mainDir = useSelector(selectMainDir)

    // hooks
    const dispatch = useDispatch()

    // main dir handler
    const setMainDirHandler = dir => {
        if(dir === 'HOME-HOME'){
            dispatch(setMainDir('HOME'))
        }else if(dir === 'AUTH-LOGIN'){
            dispatch(setMainDir('AUTH'))
            // login setter
            dispatch(setIsLogin(true))
        }else if(dir === 'AUTH-SIGNUP'){
            dispatch(setMainDir('AUTH'))
            // signup setter
            dispatch(setIsLogin(false))
        }
    }
  return (
    <header className="py-1 border-b border-gray-700 border-opacity-[.13]">
        <div className="max-w-[820px] px-3 mx-auto flex items-center justify-between">
            {/* site logo */}
            <div>
                <button className="text-2xl opacity-[.35]" 
                    onClick={()=>{
                        setMainDirHandler('HOME-HOME')
                    }}
                >
                    <ImShare />
                </button>
            </div>
            {/* search bar container */}
            <div className="flex-grow flex items-center justify-center text-xs font-serif">
                {
                    mainDir === 'HOME' 
                    ?
                    <div className="flex items-center bg-black bg-opacity-[.13] px-3 rounded-full py-[.1rem]">
                        <CiSearch className="cursor-pointer text-xl"/>
                        <input type="text" placeholder="username" 
                            className="focus:outline-none bg-transparent ml-1"
                        />
                    </div>
                    :
                    <></>
                }
            </div>
            {/* controllers */}
            {
                !true 
                ?
                <div className="flex items-center text-xs font-serif opacity-[.5]">
                    {/* logged in */}
                    <div className="flex items-center">
                        <span>username</span>
                        <RiUser4Line className="text-2xl mx-1"/>
                    </div>
                    <button className="border border-black border-opacity-[.5] rounded-sm px-3 py-[.1rem] transition-all ease-in-out duration-1000 hover:bg-black hover:bg-opacity-[.5] hover:text-white">Logout</button>
                </div>
                :
                <div className="flex items-center text-xs font-serif">
                    {/* logged out */}
                    <button className="mr-3 border border-black border-opacity-[.5] rounded-sm px-3 py-[.1rem] transition-all ease-in-out duration-1000 hover:bg-black hover:bg-opacity-[.5] hover:text-white" 
                        onClick={()=>{
                            setMainDirHandler('AUTH-LOGIN')
                        }}
                    >Login</button>
                    <button className="border border-black border-opacity-[.5] rounded-sm px-3 py-[.1rem] transition-all ease-in-out duration-1000 hover:bg-black hover:bg-opacity-[.5] hover:text-white" 
                        onClick={()=>{
                            setMainDirHandler('AUTH-SIGNUP')
                        }}
                    >Signup</button>
                </div>
            }
        </div>
    </header>
  )
}

export default Header