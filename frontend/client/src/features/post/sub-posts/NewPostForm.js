
const NewPostForm = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100">
        <div className='px-2 py-[.3rem] rounded-full bg-gray-300 text-xs font-serif'>
            <input type="text" className='bg-transparent focus:outline-none w-[230px]' placeholder='your text...'/>
            <button>send</button>
        </div>
    </div>
  )
}

export default NewPostForm