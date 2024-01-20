import {useSelector} from 'react-redux'

// actions from slices
// users 
import {
    selectUsers,
} from '../usersSlice'

const GetUsername = ({_id}) => {
    // states from slices
    // users
    const users = useSelector(selectUsers)

    let user = users.find(user => user._id === _id)
  return (
    <>
    {
        true 
        ?
        <>{user?.username}</>
        :
        <></>
    }
    </>
  )
}

export default GetUsername