import { useParams, Link } from 'react-router-dom'
import Profile from './components/Profile'
import MyBookings from './components/MyBookings'
import MyPlaces from './components/MyPlaces'
import ProfileIcon from '../../svg-icons/ProfileIcon'
import BookingIcon from '../../svg-icons/BookingIcon'

const AccountPage = () => {
  let { subpage } = useParams()
  
  if (subpage === undefined) {
    subpage = 'profile'
  }

  const getTab = (selected) => {
    let styling = `py-1 px-3 m-2 rounded-pill border 
      border-dark bg-secondary text-white 
      text-decoration-none fw-semibold
      d-flex align-items-center
      `

    if (selected === subpage) {
      styling += " bg-success"
    }
    return styling
  }

  return (
    <div className="container">
      <div className="d-flex flex-wrap justify-content-center">
        <Link to='/account' className={getTab('profile')}>
          <ProfileIcon size={"16px"} />
          <span className='ms-2'>Profile</span>
        </Link>

        <Link to='/account/bookings' className={getTab('bookings')}>
          <BookingIcon size={"16px"} />
          <span className='ms-2'>My Bookings</span>
          
        </Link>

        <Link to='/account/places' className={getTab('places')}>
          
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

      <div className="">
        {subpage === 'profile' 
          ? ( <Profile /> ) 
          : ''
        }

        {subpage === 'bookings' 
          ? ( <MyBookings /> ) 
          : ''
        }

        {subpage === 'places' 
          ? ( <MyPlaces /> ) 
          : ''
        }

      </div>
    </div>
  )
}

export default AccountPage