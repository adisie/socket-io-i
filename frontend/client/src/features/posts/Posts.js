// sub-pages
// posts list
import PostsList from "./sup-posts-components/PostsList"
// new post form
import NewPostForm from "./sup-posts-components/NewPostForm"

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