import { useParams, Link } from 'react-router-dom'
import Profile from './components/Profile'
import MyBookings from './components/MyBookings'
import MyPlaces from './components/MyPlaces'

const AccountPage = () => {
  let { subpage } = useParams()
  
  if (subpage === undefined) {
    subpage = 'profile'
  }

  const getTab = (selected) => {
    let styling = "py-1 px-3 m-2 rounded-pill border border-dark bg-secondary text-white text-decoration-none fw-semibold"

    if (selected === subpage) {
      styling += " bg-success"
    }
    return styling
  }

  return (
    <div className="">
      <div className="d-flex flex-wrap justify-content-center py-2">
        <Link to='/account' className={getTab('profile')}>
          Profile
        </Link>

        <Link to='/account/bookings' className={getTab('bookings')}>
          My Bookings
        </Link>

        <Link to='/account/places' className={getTab('places')}>
          My Places
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