import {useSelector} from 'react-redux'

// actions from slices
// users
import {
  selectUser,
} from '../users/usersSlice'

// sub components
import PostsList from "./posts-sub-components/PostsList"
import NewPostForm from "./posts-sub-components/NewPostForm"

// main
const Posts = () => {
  // states from slices
  // users
  const user = useSelector(selectUser)

  return (
    <div className='flex-grow flex flex-col'>
      <PostsList />
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