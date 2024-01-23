
// sub pages
// single post
import SinglePost from "./SinglePost"

// main
const PostsList = () => {
  return (
    <div className="self-end flex-grow max-h-[88vh] overflow-y-auto pr-3 mt-1 pt-3" id="post-list-id">
        <SinglePost />
        <SinglePost />
    </div>
  )
}

export default PostsList