import { useState } from "react"

// icons
// send
import { RiSendPlaneLine } from "react-icons/ri"

// main
const NewPostForm = () => {

    // local states
    // text
    const [text,setText] = useState('')

    // adjust text area height
    const adjustTextArea = e => {
        let textarea = document.getElementById('post-text-area')
        textarea.style.height = '24px'
        let scHeight = e.target.scrollHeight 
        textarea.style.height = `${scHeight}px`
    }
    // submit handler
    const submitHandler = e => {
        e.preventDefault()
        let textarea = document.getElementById('post-text-area')
        if(text.trim()){
            console.log({text})
        }
        textarea.style.height = '24px'
        textarea.focus()
        setText('')
    }
  return (
    <div className="flex items-center">
        <div className="relative ml-7">
            <form className="absolute bottom-0 flex items-center bg-white">
                <div className="flex bg-black bg-opacity-[.25] pl-3 rounded-sm">
                    <textarea name="text" 
                        className="w-[230px] max-h-[400px] focus:outline-none h-[24px] bg-transparent resize-none text-xs font-serif mt-2" 
                        placeholder="enter text ..." 
                        id="post-text-area" 
                        onKeyUp={adjustTextArea} 
                        value={text} 
                        onChange={e=>setText(e.target.value)} 
                    ></textarea>
                    <button className="self-end text-2xl mx-1 opacity-[.35]" 
                        onClick={submitHandler}
                    >
                        <RiSendPlaneLine />
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default NewPostForm