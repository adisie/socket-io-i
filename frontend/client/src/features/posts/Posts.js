
// sub-posts
// PostsList
import PostsList from "./sub-posts/PostsList"
// NewPostForm
import NewPostForm from "./sub-posts/NewPostForm"

// ******************
// main
const Posts = () => {
  return (
    <div className="flex-grow flex flex-col">
      <PostsList />
      {
        true && <NewPostForm />
      }
    </div>
  )
}

export default Posts