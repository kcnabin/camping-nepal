import { Link } from 'react-router-dom'
import ProfileIcon from '../svg-icons/ProfileIcon'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import LoginDropdown from './components/LoginDropdown'
import UserMenuDropdown from './components/UserMenusDropdown'
import MenuIcon from '../svg-icons/MenuIcon'

const Header = () => {
  const {user} = useContext(UserContext)
  
  return (
    <div className="bg-dark text-white py-3 position-sticky top-0 z-10">
      <div className="px-3 px-sm-0 container">
        <div className='d-flex justify-content-between'>
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

          <div className='d-flex align-items-center ' >

            {
              user ? (
                <Link to='/account' className='fw-bold me-3 d-none d-sm-block text-white text-decoration-none'>
                  {user.name}
                </Link>
              ) : ''
            }

            <div className='d-flex align-items-center border py-1 px-2 border-2 rounded-pill dropdown' data-bs-toggle="dropdown">
              <div className='text-white me-2'>
                <MenuIcon />
              </div>

              <div className='bg-dark border-white rounded-circle'>
                <ProfileIcon size={'24px'} /> 
              </div>
            </div>
            
            

            <div className="dropdown-menu p-0">
              { user 
                ? <UserMenuDropdown /> 
                : <LoginDropdown />
              }
            </div>
          </div>
        </div>
        
      </div>
    </div>

  )
}

export default Header