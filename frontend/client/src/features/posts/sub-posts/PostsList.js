import {useSelector} from 'react-redux'

// actions from slices
// postsSlice
import {
  selectPosts,
} from '../postsSlice'

// SinglePost
import SinglePost from "./SinglePost"

// *********************
// main
const PostsList = () => {
  // states from slices
  // posts
  const posts = useSelector(selectPosts)

  return (
    <div className="flex-grow h-[82vh] overflow-y-auto pr-3" id="post-list-container">
        {
          posts.map(post=>(
            <SinglePost key={post._id} post={post}/>
          ))
        }
    </div>
  )
}

export default PostsList