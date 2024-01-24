import {useSelector} from 'react-redux'

// base url
import {BASE_URL} from '../../../config'

// actions from slices
// profiles
import {
  selecteProfiles,
} from '../../profiles/profilesSlice'

// default profile
import defaultAuthorProfile from '../../../assets/images/defaultes/male-profile-3.jpg'

// main
const GetProfile = ({userId}) => {
  // states from slices
  // profiles
  const profiles = useSelector(selecteProfiles)

  // author profiles
  let userProfiles = profiles.find(profile=>profile._id === userId) 
  
  let profile = userProfiles?.profiles.length > 0 ? userProfiles?.profiles[userProfiles?.profiles.length -1] : null 
  
  return (
    <>
    {
        profile 
        ?
        <img src={`${BASE_URL}/${profile?.profilePath}`} alt="" 
            className="w-[26px] h-[26px] rounded-full mr-1"
        />
        :
        <img src={defaultAuthorProfile} alt="" 
            className="w-[26px] h-[26px] rounded-full mr-1"
        />
    }
    </>
  )
}

export default GetProfile