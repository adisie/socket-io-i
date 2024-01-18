import { useSelector } from "react-redux"

// actions from slices
// posts
import {
  selectPosts,
} from '../postSlice'

// sup-posts-content components
// single post
import SinglePost from "./SinglePost"

const PostsContent = () => {
  // states from slices
  // posts slice
  const posts = useSelector(selectPosts)
  console.log()

  return (
    <div className='flex-grow max-h-[92vh] overflow-y-auto px-3'>
        {
          posts.map(post=>(
            <SinglePost key={post._id} post={post}/>
          ))
        }
    </div>
  )
}

export default PostsContent