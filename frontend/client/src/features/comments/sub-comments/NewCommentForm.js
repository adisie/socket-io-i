import {useState} from 'react'

// icons
// send
import { GrSend } from "react-icons/gr"

// **************************
// main
const NewCommentForm = () => {

  // local states
  const [comment,setComment] = useState('')

  // adjust text area height
  const adjustTextAreaHeight = e => {
    let textarea = document.getElementById('comment-text-area')
    textarea.style.height = '18px'
    let scHheight = e.target.scrollHeight 
    textarea.style.height = `${scHheight}px`
  }

  // submit handler
  const submitHandler = () => {
    let textarea = document.getElementById('comment-text-area')
    if(comment.trim()){
      console.log({comment})
    }
    setComment('')
    textarea.style.height = '18px'
    textarea.focus()
  }

  return (
    <div className="flex items-center flex-grow">
      <div className="relative">
        <div className="absolute bottom-[-1rem] flex items-center bg-emerald-700 text-xs text-gray-200 rounded-sm px-1 left-1">
          <textarea name="comment" id="comment-text-area" placeholder="new comment" 
            className="focus:outline-none bg-transparent resize-none w-[200px] h-[18px] my-1 max-h-[300px]" 
            onKeyUp={adjustTextAreaHeight} 
            value={comment} 
            onChange={e=>setComment(e.target.value)}
          ></textarea>
          <button className="self-end text-xl opacity-[.7]" 
            onClick={submitHandler}
          >
            <GrSend />
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewCommentForm