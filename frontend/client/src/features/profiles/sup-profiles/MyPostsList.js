
import SingleMyPost from "./SingleMyPost"

// main
const MyPostsList = () => {
  return (
    <div className="flex-grow max-h-[67vh] overflow-y-auto pr-3" id="my-posts-list-con">
      <SingleMyPost />
      <SingleMyPost />
      <SingleMyPost />
      <SingleMyPost />
      <SingleMyPost />
      <SingleMyPost />
      <SingleMyPost />
      <SingleMyPost />
      <SingleMyPost />
    </div>
  )
}

export default MyPostsList