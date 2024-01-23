import { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'

// actions from slices
// users
import {
  selectUser,
  checkAuth,
} from '../users/usersSlice'

// sub-pages
// posts list
import PostsList from "./sup-posts-components/PostsList"
// new post form
import NewPostForm from "./sup-posts-components/NewPostForm"

// main
const Posts = () => {
  // states from slices
  // users
  const user = useSelector(selectUser)

  // hooks
  const dispatch = useDispatch()

  // effects
  // check-auth
  useEffect(()=>{
    dispatch(checkAuth())
  })

  return (
    <div className="flex-grow flex flex-col">
      <PostsList />
      {
        user && <NewPostForm />
      }
    </div>
  )
}

export default Posts