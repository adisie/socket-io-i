
// sub components
import PostsContent from "./PostsContent"
import NewPostForm from "./NewPostForm"

const PostsBox = () => {
  return (
    <div className="flex flex-col w-full">
      {/* posts content */}
      <PostsContent />

      {/* new post form */}
      <NewPostForm />
    </div>
  )
}

export default PostsBox