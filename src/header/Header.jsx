import { Link } from 'react-router-dom'
import ProfileIcon from '../svg-icons/profile-icon'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import LoginDropdown from './components/LoginDropdown'
import UserMenuDropdown from './components/UserMenusDropdown'

const Header = () => {
  const {user} = useContext(UserContext)
  
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
          { user 
            ? <UserMenuDropdown /> 
            : <LoginDropdown />
          }
        </div>
      </div>
    </div>
  )
}

export default Header