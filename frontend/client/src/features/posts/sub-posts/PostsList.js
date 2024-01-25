
// SinglePost
import SinglePost from "./SinglePost"

// *********************
// main
const PostsList = () => {
  return (
    <div className="flex-grow h-[82vh] overflow-y-auto pr-3" id="post-list-container">
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
        <SinglePost />
    </div>
  )
}

export default PostsList