
import SingleFavoritePost from "./SingleFavoritePost"

// mian
const MyFavoritePosts = () => {
  return (
    <div className="flex-grow max-h-[67vh] overflow-y-auto pr-3" id="my-favorite-posts-list-con">
      <SingleFavoritePost />
      <SingleFavoritePost />
      <SingleFavoritePost />
      <SingleFavoritePost />
      <SingleFavoritePost />
      <SingleFavoritePost />
      <SingleFavoritePost />
      <SingleFavoritePost />
      <SingleFavoritePost />
    </div>
  )
}

export default MyFavoritePosts