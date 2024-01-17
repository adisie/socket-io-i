
// sub post components
import PostLeftSideBar from "./sub-posts/PostLeftSideBar"
import PostsBox from "./sub-posts/PostsBox"

const Posts = () => {
  return (
    <div className='w-full h-full flex'>
        {/* posts left side bar */}
        <PostLeftSideBar />
        {/* posts box */}
        <PostsBox />
    </div>
  )
}

export default Posts