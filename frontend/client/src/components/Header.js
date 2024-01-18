import {useSelector,useDispatch} from 'react-redux'

// actions from slices
// home slice
import {
    selectMainDir,
    setMainDir,
} from '../features/home/homeSlice'
// users slice
import {
    setIsLogin,
} from '../features/users/usersSlice'

// icons
// share icon
import { FaShareAltSquare } from "react-icons/fa"
// search icon
import { CiSearch } from "react-icons/ci"
// user icon
import { MdAccountCircle } from "react-icons/md"

const Header = () => {
    // states from slices
    // home slice
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
    <header className="text-xs text-emerald-900 font-serif border-b border-emerald-900 border-opacity-[.1]">
        <div className="max-w-[1200px] mx-auto px-1 flex items-center justify-between">
            {/* site logo */}
            <div>
                <button className="text-2xl my-2" 
                    onClick={()=>{
                        setMainDirHandler('HOME-HOME')
                    }}
                >
                    <FaShareAltSquare />
                </button>
            </div>
            {/* search bar container */}
            <div>
                {
                    mainDir === 'HOME'
                    ?
                    <div className="flex rounded-full bg-black bg-opacity-[.1] px-2">
                        <button className="text-xl">
                            <CiSearch />
                        </button>
                        <input type="text" placeholder="username" className="bg-transparent focus:outline-none"/>
                    </div>
                    :
                    <></>
                }
            </div>
            {/* controllers */}
            {
                !true 
                ?
                <div className="flex items-center">
                    <div className="flex items-center cursor-pointer">
                        <span>Haddis</span>
                        <MdAccountCircle className="text-2xl"/>
                    </div>
                    <button className="text-gray-400 bg-emerald-800 px-5 rounded-sm py-[.175rem] ml-2 transition-all ease-in-out duration-300 hover:bg-emerald-700">Logout</button>
                </div>
                :
                <div className="flex items-center">
                    <button className="text-gray-200 bg-emerald-700 px-5 rounded-sm py-[.175rem] ml-2 transition-all ease-in-out duration-300 hover:bg-emerald-700" 
                        onClick={()=>{
                            setMainDirHandler('AUTH-LOGIN')
                        }}
                    >Login</button>
                    <button className="text-gray-200 bg-emerald-700 px-5 rounded-sm py-[.175rem] ml-2 transition-all ease-in-out duration-300 hover:bg-emerald-700" 
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