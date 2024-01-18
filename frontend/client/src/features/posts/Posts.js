
import {useSelector} from 'react-redux'

// actions from slices
// users slices
import {
  selectUser,
} from '../users/usersSlice'

// sub-posts-components
// posts content
import PostsContent from "./sup-posts-components/PostsContent"
// new post form
import NewPostForm from "./sup-posts-components/NewPostForm"

// main functions
const Posts = () => {
  // states from slices
  // users slice
  const user = useSelector(selectUser)

  return (
    <div className='flex-grow flex flex-col'>
      {/* posts content */}
      <PostsContent />
      {/* new post form */}
      {
        user 
        ?
        <NewPostForm />
        :
        <></>
      }
    </div>
  )
}

export default Posts