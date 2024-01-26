
// sub-posts
// PostsList
import PostsList from "./sub-posts/PostsList"
// NewPostForm
import NewPostForm from "./sub-posts/NewPostForm"
// comments
import Comments from '../comments/Comments'

// ******************
// main
const Posts = () => {
  return (
    <div className="flex-grow flex flex-col relative">
      <PostsList />
      {
        true && <NewPostForm />
      }
      <Comments />
    </div>
  )
}

export default Posts