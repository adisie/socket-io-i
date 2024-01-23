
const UsersSpinner = () => {
  return (
    <div className="flex-grow flex justify-center pt-7">
        <div className="mt-12">
            <div className="relative flex items-center justify-center">
                <div className="absolute w-[100px] h-[100px] rounded-full border-2 border-green-700 border-r-transparent animate-spin"></div>
                <div className="absolute w-[75px] h-[75px] rounded-full border-2 border-yellow-500 border-l-transparent animate-anti-spin"></div>
                <div className="absolute w-[50px] h-[50px] rounded-full border-2 border-red-700 border-r-transparent animate-spin"></div>
            </div>
        </div>
    </div>
  )
}

export default UsersSpinner