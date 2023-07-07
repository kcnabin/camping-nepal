import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import MenuIcon from '../../svg-icons/MenuIcon'
import ProfileIcon from '../../svg-icons/ProfileIcon'
import UserMenuDropdown from './components/UserMenusDropdown'
import LoginDropdown from './components/LoginDropdown'


const Header = () => {
  const { user } = useContext(UserContext)

  return (
    <div className="bg-dark text-white py-3 position-sticky top-0 z-10">
      <div className="mx-3 mx-md-4 mx-xl-4">
        <div className='d-flex justify-content-between'>
          <Link to='/'
            className="align-center text-white"
          >
            <div className="brand-img">
              <img
                src="/icons/camp.png"
                className="w-100"
                alt='camp icon'
              />
            </div>
            <span className="m-0 ms-2">
              Camping Nepal
            </span>
          </Link>

          <div className='align-center' >

            {
              user ? (
                <Link to='/account/profile' className='fw-bold me-3 d-none d-sm-block'>
                  {user.name}
                </Link>
              ) : ''
            }

            <div className='align-center border p-2 border-2 rounded-pill dropdown' data-bs-toggle="dropdown">
              <div className='text-white me-2'>
                <MenuIcon />
              </div>

              <div className='bg-dark border-white rounded-circle'>
                <ProfileIcon />
              </div>
            </div>



            <div className="dropdown-menu p-0">
              {user
                ? <UserMenuDropdown />
                : <LoginDropdown />}
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Header