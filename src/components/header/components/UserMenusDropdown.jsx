import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../../context/UserContext'

import ProfileIcon from '../../../svg-icons/ProfileIcon'
import BookingIcon from '../../../svg-icons/BookingIcon'
import HomeIcon from '../../../svg-icons/HomeIcon'
import LogOutIcon from '../../../svg-icons/LogOutIcon'
import IconText from '../../iconText/IconText'


const UserMenuDropdown = () => {
  const navigate = useNavigate()
  const userContext = useContext(UserContext)

  const logout = e => {
    e.preventDefault()
    localStorage.removeItem('camper')
    userContext.setUser(null)
    navigate('/login')
  }

  return (
    <div className="d-flex flex-column overflow-hidden">

      <Link to='/account/profile' className='dropdown-options align-center'>
        <IconText text='Profile'>
          <ProfileIcon size='20px' />
        </IconText>
      </Link>

      <Link to='/account/my-bookings' className='dropdown-options align-center'>
        <IconText text='My Bookings'>
          <BookingIcon size='20px' />
        </IconText>
      </Link>

      <Link to='/account/user-bookings' className='dropdown-options align-center'>
        <IconText text='User Bookings'>
          <BookingIcon size='20px' />
        </IconText>
      </Link>

      <Link to='/account/my-places' className='dropdown-options align-center'>
        <IconText text='My Places'>
          <HomeIcon size='20px' />
        </IconText>
      </Link>

      <Link className='dropdown-options align-center' onClick={logout}>
        <IconText text='Log Out'>
          <LogOutIcon size='20px' />
        </IconText>
      </Link>

    </div>
  )

}
export default UserMenuDropdown