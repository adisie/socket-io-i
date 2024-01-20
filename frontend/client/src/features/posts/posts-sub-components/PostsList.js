import {useSelector} from 'react-redux'

// actions from slices
// posts
import {
  selectPosts,
} from '../postsSlice'

// sub components
import SinglePost from "./SinglePost"

// main
const PostsList = () => {
  // states from slices
  // posts
  const posts = useSelector(selectPosts)

  return (
    <div className="flex-grow max-h-[93vh] overflow-y-auto pr-3 pt-3" id="post-list-container">
      {
        posts.map(post=>(
          <SinglePost key={post._id} post={post} />
        ))
      }
    </div>
  )
}

export default PostsList