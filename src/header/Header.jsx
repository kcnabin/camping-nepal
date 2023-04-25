import { Link } from 'react-router-dom'
import ProfileIcon from '../svg-icons/profile-icon'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Header = () => {
  const {user} = useContext(UserContext)
  console.log('user :', user);
  return (
    <div className="bg-dark text-white d-flex justify-content-between py-3 px-3">
      <Link to='/' 
        className="d-flex align-items-center text-decoration-none text-white"
      >
        <div className="brand-img">
          <img
            src="/icons/camp.png"
            className="w-100"
            alt='camp icon'
          />
        </div>
        <span className="fs-6 fw-semibold m-0 ms-2">
          Camping Nepal
        </span>
      </Link>

      <div className='d-flex align-items-center dropdown'>
        <div className='rounded-pill border bg-secondary border-white p-1' data-bs-toggle="dropdown">
          <ProfileIcon size={'24px'} /> 
        </div>
        {
          user ? (
            <Link to='/account' className='fw-bold ms-2 d-none d-sm-block text-white text-decoration-none'>
              {user.name}
            </Link>
          ) : ''
        }

        <div className="dropdown-menu p-0 p-1">
          <div className="d-flex flex-column">
            <Link to='/account' className='text-decoration-none py-2 px-3 text-dark fw-bold'>
              Profile
            </Link>
            <Link to='/account/bookings' className='text-decoration-none py-2 px-3 text-dark fw-bold'>
              My Bookings
            </Link>
            <Link to='/account/places' className='text-decoration-none py-2 px-3 text-dark fw-bold'>
              My Places
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header