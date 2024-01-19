// sub components
import PostsList from "./posts-sub-components/PostsList"
import NewPostForm from "./posts-sub-components/NewPostForm"

// main
const Posts = () => {
  return (
    <div className='flex-grow flex flex-col'>
      <PostsList />
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