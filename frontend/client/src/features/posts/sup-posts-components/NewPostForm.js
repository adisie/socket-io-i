import { useState } from "react"
// icons
// send icon
import { RiSendPlaneLine } from "react-icons/ri"

// new post form main function
const NewPostForm = () => {
    // local states
    // text
    const [text,setText] = useState('')

    // adjust text area height
    const adjustTextAreaHeight = e => {
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
        setText('')
        textarea.style.height = '24px'
        textarea.focus()
    }
  return (
    <div className='relative flex items-center'>
        <div className='relative'>
            <form className='absolute bottom-1 mx-3 bg-white' onSubmit={submitHandler}>
            <div className="flex items-center bg-black bg-opacity-[.175] rounded-sm px-1 pt-[.13rem]">
                <textarea name="text" placeholder='enter your text . . .' 
                className="focus:outline-none bg-transparent w-[230px] h-[24px] resize-none text-xs text-emerald-900 font-serif mt-1" 
                id="post-text-area" 
                onKeyUp={adjustTextAreaHeight} 
                value={text} 
                onChange={e=>setText(e.target.value)} 
                ></textarea>
                <button className="text-2xl text-emerald-900 opacity-[.75] self-end">
                    <RiSendPlaneLine />
                </button>
            </div>
            </form>
        </div>
    </div>
  )
}

export default NewPostForm