import {useSelector} from 'react-redux'

// actions from slices
// profiles
import {
  selectProfileDir,
} from './profilesSlice'

// sub profiles
import UserProfiles from "./sup-profiles/UserProfiles"
import ProfilesHeader from "./sup-profiles/ProfilesHeader"
import MyPostsList from "./sup-profiles/MyPostsList"
import MyFavoritePosts from "./sup-profiles/MyFavoritePosts"

// main
const Profiles = () => {
  // states from slices
  // profiles
  const profileDir = useSelector(selectProfileDir)

  return (
    <div className="flex-grow flex flex-col">
      <UserProfiles />
      <ProfilesHeader />
      {
        profileDir === "MY-POSTS" 
        ?
        <MyPostsList />
        :
        profileDir === "MY-FAVORITES"
        ?
        <MyFavoritePosts />
        :
        <></>
      }
    </div>
  )
}

export default Profiles