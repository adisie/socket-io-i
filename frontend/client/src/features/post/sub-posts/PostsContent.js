
// sub components
import SinglePost from "./SinglePost"

const PostsContent = () => {
  return (
    <div className="flex-grow max-h-[100vh] overflow-y-auto b">
      <SinglePost />
      <SinglePost />
    </div>
  )
}

export default PostsContent