import { Link, useNavigate } from 'react-router-dom'
import ProfileIcon from '../../svg-icons/ProfileIcon'
import BookingIcon from '../../svg-icons/BookingIcon'
import HomeIcon from '../../svg-icons/HomeIcon'
import LogOutIcon from '../../svg-icons/LogOutIcon'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'

const UserMenuDropdown = () => {
  const style = `text-decoration-none py-2 px-3 text-dark fw-bold d-flex align-items-center`

  const navigate = useNavigate()
  const userContext = useContext(UserContext)

  const logout = e => {
    e.preventDefault()
    localStorage.removeItem('camper')
    userContext.setUser(null)
    navigate('/login')
  }

  return (
    <div className="d-flex flex-column">

      <Link to='/account' className={style}>
        <ProfileIcon />
        <span className='ms-2'>Profile</span>
      </Link>

      <Link to='/account/bookings' className={style}>
        <BookingIcon />
        <span className='ms-2'>My Bookings</span>
      </Link>

      <Link to='/account/places' className={style}>
        <HomeIcon />
        <span className='ms-2'>My Places</span>
      </Link>

      <Link className={style}
        onClick={logout}
      >
        <LogOutIcon />
        <span className='ms-2'>Log Out</span>
      </Link>
    </div>
  )
 
}
  export default UserMenuDropdown