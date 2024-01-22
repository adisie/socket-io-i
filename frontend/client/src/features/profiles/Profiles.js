
// default profile image
import defaultProfile from '../../assets/images/defaultes/male-profile-3.jpg'
// test profile
import testProfile from '../../assets/images/defaultes/tewodiros1.jpg'

// icons
// delete
import { AiFillDelete } from "react-icons/ai"
// arrows
import { IoMdArrowDropleft } from "react-icons/io"
import { IoMdArrowDropright } from "react-icons/io";
// image
import { BiSolidImageAdd } from "react-icons/bi"

// main
const Profiles = () => {
  return (
    <div className="flex-grow flex justify-center pt-12">
      <div className="flex justify-center">
        <div className="relative w-full">
          <div>
            {
              true 
              ?
              <img src={testProfile} 
                className="w-[250px] h-[250px] object-cover rounded-full"
               />
              :
              <>
              <input type="file" name="profile-img" id="profile-img" accept="image/*" hidden />
              <label htmlFor="profile-img">
                <img src={defaultProfile} 
                  className="w-[250px] h-[250px] object-cover rounded-full cursor-pointer"
                />
              </label>
              </>
            }
          </div>
          {
            true 
            ?
            <button className="absolute top-0 right-0 text-2xl text-emerald-950 opacity-[.75]" 
            >
              <AiFillDelete />
            </button>
            :
            <></>
          }
          <div className="flex items-center justify-center opacity-[.75]" >
            {
              true 
              ?
              <button 
                className="text-3xl text-emerald-950"
              >
                <IoMdArrowDropleft />
              </button>
              :
              <></>
            }
            {/* new profile */}
            <input type="file" name="profile" id="profile" hidden accept="image/*" />
            <label htmlFor="profile" 
              className="text-3xl text-emerald-950 cursor-pointer"
            >
              <BiSolidImageAdd />
            </label>
            {
              true 
              ?
              <button 
                className="text-3xl text-emerald-950"
              >
                <IoMdArrowDropright />
              </button>
              :
              <></>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profiles