import {useState} from 'react'
import {
    useDispatch,
    useSelector,
} from 'react-redux'

// actions from slices
// posts
import {
    addNewPost,
    selectIsPostPending,
} from '../postsSlice'

// icons
// send
import { LuSendHorizonal } from "react-icons/lu"

// posts spinner
import PostsSpinner from './PostsSpinner'

// main
const NewPostForm = () => {

    // local states
    // text 
    const [text,setText] = useState('')

    // states from slices
    // posts
    const isPostPending = useSelector(selectIsPostPending)

    // hooks
    const dispatch = useDispatch()

    // adjust text area height
    const adjustTextAreaHeight = e => {
        let textarea = document.getElementById('new-post-text-area')
        textarea.style.height = '24px'
        let scHeight = e.target.scrollHeight 
        textarea.style.height = `${scHeight}px`
    }

    // submit handler
    const submitHandler = () => {
        let textarea = document.getElementById('new-post-text-area')
        if(text.trim()){
            dispatch(addNewPost({text}))
        }
        setText('')
        textarea.style.height = '24px'
        textarea.focus()
    }
    if(isPostPending){
        return <PostsSpinner />
    }
  return (
    <div className="flex items-center pl-12">
        <div className="relative bg-white">
            <div className="absolute bottom-[-2rem] flex items-center bg-gray-200 text-xs font-serif px-1 rounded-sm pt-[.35rem]">
                <textarea name="text" placeholder="enter text..." 
                    className="focus:outline-none w-[230px] h-[24px] bg-transparent border-none resize-none max-h-[350px]" 
                    id="new-post-text-area" 
                    onKeyUp={adjustTextAreaHeight} 
                    onChange={e=>setText(e.target.value)} 
                    value={text}
                ></textarea>
                <button 
                    className="self-end text-xl opacity-[.5]" 
                    onClick={submitHandler}
                >
                    <LuSendHorizonal />
                </button>
            </div>
        </div>
    </div>
  )
}

export default NewPostForm