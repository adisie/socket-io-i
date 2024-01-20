
const UserSpinner = () => {
  return (
    <div  className="flex justify-center pt-24">
        <div className="">
            <div className="relative flex items-center justify-center bg-green-500">
                <div className="absolute border border-gray-600 w-[100px] h-[100px] rounded-full flex items-center justify-center border-r-transparent animate-spin"> 
                </div>
                <div className="absolute w-[75px] h-[75px] rounded-full border border-gray-600 flex items-center justify-center border-l-transparent animate-anti-anim">
                </div>
                <div className="absolute flex items-center justify-center w-[50px] h-[50px] rounded-full border border-gray-600 border-r-transparent animate-spin">
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserSpinner