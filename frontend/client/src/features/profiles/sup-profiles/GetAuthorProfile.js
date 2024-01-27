import {useSelector} from 'react-redux'
import {BASE_URL} from '../../../config'

// actions from slices
// profiles
import {
  selectProfiles,
} from '../profilesSlice'

// defaultAuthor Profile
import defaultAuthorProfile from '../../../assets/images/defaults/male-profile-3.jpg'



// ****************************
// main
const GetAuthorProfile = ({userId}) => {
  // states from slices
  // profiles
  const profiles = useSelector(selectProfiles)
  let userProfiles = profiles.find(userProfiles=>userProfiles._id === userId)
  
  let authorProfiles = userProfiles?.profiles?.length > 0 ? userProfiles.profiles : null 

  return (
    <>
    {
        authorProfiles
        ?
        <img src={`${BASE_URL}/${authorProfiles[authorProfiles?.length - 1]?.profilePath}`} alt="author profile" 
            className="w-[24px] h-[24px] rounded-full mr-1"
        />
        :
        <img src={defaultAuthorProfile} alt="author profile" 
            className="w-[24px] h-[24px] rounded-full mr-1"
        />
    }
    </>
  )
}

export default GetAuthorProfile