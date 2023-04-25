import { Link } from 'react-router-dom'

const UserMenuDropdown = () => {
  return (
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
  )
 
}
  export default UserMenuDropdown