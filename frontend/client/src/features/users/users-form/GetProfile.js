
// default profile
import defaultAuthorProfile from '../../../assets/images/defaultes/male-profile-3.jpg'
// test profile
import testProfile from '../../../assets/images/defaultes/tewodiros1.jpg'
// main
const GetProfile = () => {
  return (
    <>
    {
        true 
        ?
        <img src={testProfile} alt="" 
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