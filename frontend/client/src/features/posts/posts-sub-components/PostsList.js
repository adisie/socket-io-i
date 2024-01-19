// sub components
import SinglePost from "./SinglePost"

// main
const PostsList = () => {
  return (
    <div className="flex-grow max-h-[93vh] overflow-y-auto pr-3 pt-3" id="post-list-container">
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
    </div>
  )
}

export default PostsList