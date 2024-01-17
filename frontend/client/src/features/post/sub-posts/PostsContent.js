import { UseSelector, useSelector } from "react-redux"
import {
  selectMessages
} from '../postSlice'
// sub components
import SinglePost from "./SinglePost"

const PostsContent = () => {
  const messages = useSelector(selectMessages)
  console.log(messages)
  return (
    <div className="flex-grow max-h-[100vh] overflow-y-auto b">
      {
        messages.map((message,index)=>(
          <SinglePost key={index} message={message}/>
        ))
      }
    </div>
  )
}

export default PostsContent