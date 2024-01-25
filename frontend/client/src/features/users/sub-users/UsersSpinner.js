import React from 'react'

// *************************
// main
const UsersSpinner = () => {
  return (
    <div className="flex-grow flex justify-center">
        <div className="relative flex items-center justify-center">
            <div className="absolute top-24 flex items-center justify-center">
                <div className="absolute w-[80px] h-[80px] rounded-full border-2 border-emerald-700 border-r-transparent animate-spin"></div>
                <div className="absolute w-[50px] h-[50px] rounded-full border-2 border-emerald-700 border-l-transparent animate-anti-spin"></div>
                <div className="absolute w-[30px] h-[30px] rounded-full border-2 border-emerald-700 border-r-transparent animate-spin"></div>
            </div>
        </div>
    </div>
  )
}

export default UsersSpinner