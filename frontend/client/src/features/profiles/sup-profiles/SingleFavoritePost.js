
import GetUsername from '../../users/sub-users/GetUsername'
import GetAuthorProfile from './GetAuthorProfile'

// main
const SingleFavoritePost = () => {
  return (
    <div className='border-b border-emerald-900 border-opacity-[.1] mb-3'>
        <div className='ml-5 text-xs text-emerald-900 font-serif'>
            <p className='text-justify'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium animi sunt quis nihil quam pariatur ipsam minima omnis repudiandae facere? Ea dignissimos nemo ullam molestias neque doloremque officiis. Nihil soluta laboriosam et, atque quod dicta iste quo quisquam sed optio saepe porro ab, error tenetur accusantium beatae totam tempora corporis in. Nostrum quidem illo distinctio totam facere libero non impedit dolores dignissimos! A odit molestias dolore nisi cupiditate eos delectus repellendus dolorem cum soluta pariatur, nam, quasi ut ducimus voluptate neque molestiae consequuntur maiores et earum tenetur fugiat suscipit saepe. Facilis quidem libero reprehenderit minima, accusamus pariatur quod neque porro.
            </p>
        </div>
        <div className='flex items-center py-1'>
            <GetAuthorProfile />
            <span className='text-xs text-emerald-900 font-serif'>
                <GetUsername />
            </span>
        </div>
    </div>
  )
}

export default SingleFavoritePost