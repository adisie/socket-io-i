// defaultAuthor Profile
import defaultAuthorProfile from '../../../assets/images/defaults/male-profile-3.jpg'
// testAuthorProfile
import testAuthorProfile from '../../../assets/images/defaults/tewodiros1.jpg'

// icons
// like
import { PiThumbsUpDuotone } from "react-icons/pi"
// comments
import { TiMessage } from "react-icons/ti"
// favorite
import { MdFavoriteBorder } from "react-icons/md"
// delete
import { AiOutlineDelete } from "react-icons/ai"

// **********************
// main
const SinglePost = () => {
  return (
    <div className="py-1 border-b border-emerald-700 border-opacity-[.15] mb-3 text-xs text-emerald-950 font-serif">
        <div className="ml-5">
            <p className="text-justify">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid accusantium, eveniet repudiandae dignissimos excepturi quam nemo natus autem quo culpa fugiat voluptates vel fugit atque, dolores obcaecati blanditiis architecto sunt mollitia. Nesciunt quo explicabo dolores quis magni omnis quasi, laboriosam expedita facere, optio consequatur quidem, ratione officia? Obcaecati, nostrum, sit esse vitae laudantium quas et cumque animi aliquid ratione iusto est aut, recusandae tempora ex culpa dolores maxime. Ea blanditiis maiores fugit animi eum fugiat enim vitae fuga commodi vero, quaerat, numquam magni tempore tempora in culpa, aut natus! Reprehenderit sed unde tempore ut sit iusto autem necessitatibus neque qui.
            </p>
        </div>
        {/* ******* author info container ******* */}
        <div className="flex items-center my-1">
            {/* author profile and name */}
            <div className="flex items-center cursor-pointer">
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
                <span>author name</span>
            </div>
            {/* ***** IsOnline ****** */}
            <div className="w-[7px] h-[7px] rounded-full bg-emerald-700 mx-1"></div>
            {/* **** post controllers */}
            <div className="flex items-center">
                <span className="text-sm mr-1">12</span>
                {/* *** like *** */}
                <button className="text-2xl mr-1">
                    <PiThumbsUpDuotone />
                </button>
                <span className="text-sm mr-1">33</span>
                {/* *** comments *** */}
                <button className="text-2xl mr-1">
                    <TiMessage />
                </button>
                {/* *** favorite *** */}
                <button className="text-2xl mr-1">
                    <MdFavoriteBorder />
                </button>
                {/* *** delete *** */}
                <button className="text-2xl opacity-[.7] mr-1">
                    <AiOutlineDelete />
                </button>
            </div>
            {/* **** date **** */}
            <div>
                <span>date</span>
            </div>
        </div>
    </div>
  )
}

export default SinglePost