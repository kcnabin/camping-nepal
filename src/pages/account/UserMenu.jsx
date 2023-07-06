import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import ProfileIcon from '../../svg-icons/ProfileIcon'
import BookingIcon from '../../svg-icons/BookingIcon'

const UserMenu = () => {
  const location = useLocation()

  const getMenuStyle = (selected) => {
    let styling = `px-3 py-2 rounded-pill text-white bg-secondary align-center flex-grow-1`

    if (location.pathname === '/account') {
      location.pathname = '/account/profile'
    }

    if (location.pathname.includes(selected)) {
      styling += " bg-success"
    }
    return styling
  }

  return (
    <div className='h-min-100vh' style={{ minWidth: "160px" }}>
      <div className="d-flex flex-column gap-3 ">
        <Link to='/account/profile' className={getMenuStyle('profile')}>
          <ProfileIcon size={"16px"} />
          <span className='ms-2'>Profile</span>
        </Link>

        <Link to='/account/user-bookings' className={getMenuStyle('user-bookings')}>
          <BookingIcon size={"16px"} />
          <span className='ms-2'>User Bookings</span>
        </Link>

        <Link to='/account/my-bookings' className={getMenuStyle('my-bookings')}>
          <BookingIcon size={"16px"} />
          <span className='ms-2'>My Bookings</span>
        </Link>

        <Link to='/account/my-places' className={getMenuStyle('places')}>
          <div className='icon d-flex align-items-center'>
            <img
              src='/icons/camp.png'
              alt='camp icon'
              className='w-100'
            />
          </div>
          <span className='ms-2'>My Places</span>
        </Link>

      </div>
    </div>
  )
}

export default UserMenu