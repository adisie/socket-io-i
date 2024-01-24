import {useSelector} from 'react-redux'

// actions from slices
// posts
import {
  selectPosts,
} from '../postsSlice'

// sub pages
// single post
import SinglePost from "./SinglePost"

// main
const PostsList = () => {
  // states from slices
  // posts
  const posts = useSelector(selectPosts)

  return (
    <div className="self-end flex-grow max-h-[88vh] overflow-y-auto pr-3 mt-1 pt-3" id="post-list-id">
        {
          posts.map(post=>(
            <SinglePost key={post._id} post={post} />
          ))
        }
    </div>
  )
}

export default PostsList