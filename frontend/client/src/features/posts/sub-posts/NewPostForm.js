import {useState} from 'react'
import {useDispatch} from 'react-redux'

// actions from slices
// postsSlice
import {
    addNewPost,
} from '../postsSlice'


// icons
// send 
import { GrSend } from "react-icons/gr"

// ************************
// main
const NewPostForm = () => {
    // local states
    // text
    const [text,setText] = useState('')

    // hooks
    const dispatch = useDispatch()

    // adjust textarea height
    const adjustTextAreaHeight = e => {
        let textarea = document.getElementById('post-text-area')
        textarea.style.height = "18px"
        let scHeight = e.target.scrollHeight 
        textarea.style.height = `${scHeight}px`
    }

    // submit handler
    const submitHandler = () => {
        let textarea = document.getElementById('post-text-area') 
        if(text.trim()){
            dispatch(addNewPost({text}))
        }
        setText('')
        textarea.style.height = '18px'
        textarea.focus()
    }

  return (
    <div className="flex-grow flex items-center pl-24">
        <div className="relative">
            <div className="absolute bottom-0 left-0 bg-emerald-700 text-gray-100 rounded-sm flex items-center p-1">
                <textarea name="text" id="post-text-area" 
                    className="focus:outline-none bg-transparent resize-none w-[230px] text-xs font-serif h-[18px] max-h-[400px]" 
                    placeholder="enter text ..." 
                    onKeyUp={adjustTextAreaHeight} 
                    value={text} 
                    onChange={e=>setText(e.target.value)} 
                ></textarea>
                <button 
                    className="self-end text-xl opacity-[.75] ml-1" 
                    onClick={submitHandler}
                >
                    <GrSend />
                </button>
            </div>
        </div>
    </div>
  )
}

export default NewPostForm