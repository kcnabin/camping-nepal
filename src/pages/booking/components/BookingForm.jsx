import { useEffect, useState } from "react"
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { getTokenHeader } from "../../../helper/getTokenHeader"
import { dateDifference } from "../../../helper/dateDifference"
import { handleError } from "../../../helper/handleError"
import { useUserContext } from "../../../context/UserContext"
import { getCurrentDate, getTomorrowDate } from "../../../helper/dateHelper"
import { useFetchDataIf } from "../../../customHooks/useFetchDataIf"
import { toast } from "react-toastify"

const BookingForm = ({ place }) => {
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [noOfPeople, setNoOfPeople] = useState('')
  const [name, setName] = useState('')
  const [contactNo, setContactNo] = useState('')
  const [email, setEmail] = useState('')

  const [myBooking, setMyBooking] = useState({})

  const navigate = useNavigate()
  const { pathname } = useLocation()

  const { user } = useUserContext()
  const { bookingId } = useParams()
  const { action } = useParams()

  useEffect(() => {
    setCheckOut(getTomorrowDate(checkIn))
  }, [checkIn])

  useEffect(() => {
    if (user) {
      const fetchUserInfo = async () => {
        try {
          const { data: userInfo } = await axios.get('/user-info', getTokenHeader())
          setName(userInfo.name)
          setEmail(userInfo.email)

        } catch (error) {
          return handleError(error)
        }
      }

      fetchUserInfo()
    }
  }, [user])

  useEffect(() => {
    if (bookingId) {
      const fetchBooking = async () => {
        try {
          const bookingUrl = '/booking/' + bookingId
          const { data } = await axios.get(bookingUrl, getTokenHeader())

          setMyBooking(data)
          setCheckIn((data.checkIn))
          setCheckOut((data.checkOut))
          setNoOfPeople(data.noOfPeople || 5)
          setName(data.contactName)
          setContactNo(data.contactNo)

        } catch (e) {
          handleError(e)
        }
      }

      fetchBooking()
    }

  }, [bookingId])


  const bookPlace = async e => {
    e.preventDefault()

    const bookingObject = {
      bookedPlace: place._id.toString(),
      placeName: place.name,
      placeOwner: place.owner.toString(),
      checkIn: checkIn.toString(),
      checkOut: checkOut.toString(),
      contactName: name,
      contactNo,
      email,
      price: place.price,
      noOfPeople
    }

    const bookingToUpdate = {
      bookingBy: myBooking.bookingBy,
      bookingConfirm: myBooking.bookingConfirm,
      ...bookingObject
    }

    if (bookingId) {
      try {
        const url = `/booking/${bookingId}`
        await axios.put(url, bookingToUpdate, getTokenHeader())
        toast.success('Booking updated!')

      } catch (e) {
        return handleError(e)
      }

    } else {
      try {
        const url = '/booking'
        await axios.post(url, bookingObject, getTokenHeader())
        toast.success('Place booked!')

      } catch (e) {
        return handleError(e)
      }
    }

    navigate('/account/bookings')
  }

  return (
    <form onSubmit={bookPlace}>
      <div className="ms-md-5 shadow py-3 px-4 h-100">

        <div className="">
          <span className="fs-5 fw-semibold">
            NRs {place.price.toLocaleString()}
          </span>
          <span className="ms-1">/ night</span>
        </div>

        <div className="d-flex flex-wrap gap-3 mt-3">
          <div className="flex-grow-1">
            <span>
              Check In
            </span>
            <input
              type="date"
              min={getCurrentDate()}
              className="form-control border border-secondary mt-1 w-100"
              value={checkIn}
              onChange={e => setCheckIn(e.target.value)}
              required
              disabled={!user}
            />
          </div>

          <div className="flex-grow-1">
            <span>
              Check Out
            </span>
            <input
              type="date"
              min={getTomorrowDate(checkIn)}
              className="form-control border border-secondary mt-1 w-100"
              value={checkOut}
              onChange={e => setCheckOut(e.target.value)}
              required
              disabled={!user || !checkIn}
            />
          </div>
        </div>

        <div className="mt-3">
          <span>
            Number of people
          </span>
          <input
            type="number"
            className="form-control border border-secondary mt-1"
            value={noOfPeople}
            onChange={e => setNoOfPeople(e.target.value)}
            required
            disabled={!user}
          />
        </div>

        <div className="mt-3">
          <span>
            Contact Name
          </span>
          <input
            type="text"
            className="form-control border border-secondary mt-1"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            disabled={!user}
          />
        </div>

        <div className="mt-3">
          <span>
            Contact Number
          </span>
          <div>
            <input
              type="number"
              className="form-control border border-secondary mt-1"
              value={contactNo}
              onChange={e => setContactNo(e.target.value)}
              required
              disabled={!user}
            />
          </div>
        </div>

        <div className="mt-3">
          <span>
            Email
          </span>
          <div>
            <input
              type="email"
              className="form-control border border-secondary mt-1"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              disabled={!user}
            />
          </div>
        </div>

        {
          (checkIn !== '' && checkOut !== '') ? (
            <div className=" fw-bold">
              <div className="mt-3">
                Total Nights: {dateDifference(checkOut, checkIn)}
              </div>
              <div className="mt-3">
                Total Amount: NRs. {
                  (dateDifference(checkOut, checkIn)
                    * place.price).toLocaleString()
                }
              </div>
            </div>
          ) : ""
        }

        <div className="mt-3">
          {user
            ? (
              <button
                type="submit"
                className="btn btn-success"
                disabled={action === 'view'}
              >
                {bookingId ? 'Update Booking' : 'Reserve Place'}
              </button>
            )
            : (
              <Link to='/login' state={{ redirectTo: pathname }} className="btn btn-primary">
                Login
              </Link>
            )
          }
        </div>



      </div>
    </form>

  )
}

export default BookingForm