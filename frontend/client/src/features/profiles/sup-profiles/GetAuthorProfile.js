// defaultAuthor Profile
import defaultAuthorProfile from '../../../assets/images/defaults/male-profile-3.jpg'
// testAuthorProfile
import testAuthorProfile from '../../../assets/images/defaults/tewodiros1.jpg'



// ****************************
// main
const GetAuthorProfile = () => {
  return (
    <>
    {
        true 
        ?
        <img src={testAuthorProfile} alt="author profile" 
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