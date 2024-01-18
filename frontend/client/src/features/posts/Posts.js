
// sub-posts-components
// posts content
import PostsContent from "./sup-posts-components/PostsContent"
// new post form
import NewPostForm from "./sup-posts-components/NewPostForm"

const Posts = () => {
  return (
    <div className='flex-grow flex flex-col'>
      {/* posts content */}
      <PostsContent />
      {/* new post form */}
      {
        true 
        ?
        <NewPostForm />
        :
        <></>
      }
    </div>
  )
}

export default Posts