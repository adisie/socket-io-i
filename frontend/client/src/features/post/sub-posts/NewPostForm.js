import { useState } from "react"
import { BsSendFill } from "react-icons/bs"

const NewPostForm = () => {

  // states
  const [text,setText] = useState('')

  // adjust height
  const adjustHeight = e => {
    let textarea = document.getElementById('post-text-area')
    textarea.style.height = '24px'
    let scHeight = e.target.scrollHeight 
    textarea.style.height = `${scHeight}px`
  }

  // submit handler
  const submitHandler = () => {
    let textarea = document.getElementById('post-text-area')
    if(text.trim()){
      console.log(text)
    }
    setText('')
    textarea.style.height = '24px'
    textarea.focus()
  }
  return (
    <div className="flex items-center justify-center bg-gray-100 px-5 relative">
        <div className='px-2 py-[.1rem] rounded-sm bg-gray-300 text-xs font-serif flex items-center absolute bottom-1 left-[20%]'>
            <textarea name="text" className='h-[24px] mt-2 focus:outline-none bg-transparent resize-none w-[230px]' placeholder="enter text" id="post-text-area"
              onKeyUp={adjustHeight}  
              value={text} 
              onChange={e=>setText(e.target.value)}
            ></textarea>
            <button className="self-end text-xl text-gray-500 mb-[.35rem]" 
              onClick={submitHandler}
            >
              <BsSendFill />
            </button>
        </div>
    </div>
  )
}

export default NewPostForm