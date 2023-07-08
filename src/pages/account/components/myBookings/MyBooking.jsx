import axios from "axios"
import { useFetchData } from "../../../../customHooks/useFetchData"
import { getTokenHeader } from "../../../../helper/getTokenHeader"
import { handleError } from "../../../../helper/handleError"
import BookingInfo from "./BookingInfo"
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react"

const MyBookings = () => {
  const navigate = useNavigate()
  const bookingUrl = '/booking'
  const { value: myBooking, setValue: setMyBooking } = useFetchData(bookingUrl, '')
  const [bookings, setBookings] = useState('')

  useEffect(() => {
    if (myBooking) {
      const sortedBookings = [...myBooking].sort(
        (bookingA, bookingB) => new Date(bookingB.checkIn) - new Date(bookingA.checkIn))
      setBookings(sortedBookings)
    }
  }, [myBooking])


  const editBooking = (placeId, bookingId) => {
    navigate(`/places/${placeId}/edit/${bookingId}`)
  }

  const deleteBooking = async (bookingId) => {
    const url = '/booking/' + bookingId

    if (window.confirm('Want to delete booking?')) {
      try {
        await axios.delete(url, getTokenHeader())
        setMyBooking(bookings.filter(booking => booking._id.toString() !== bookingId))

      } catch (e) {
        handleError(e)
      }
    }
  }

  if (bookings) {
    return (
      <div className="container-fluid">
        <h4 className="">
          My Booking
        </h4>

        <div className="row">
          {
            bookings.map((booking, i) => {
              return (
                <div key={i} className="col-12 col-sm-6 col-lg-4 mt-2">
                  <div className="card">
                    <BookingInfo booking={booking} />

                    <div className="px-3 pb-3">
                      <button
                        className={booking.bookingConfirm ? "btn btn-success" : "btn btn-secondary"}
                        onClick={() => editBooking(booking.bookedPlace._id, booking._id)}
                        disabled={booking.bookingConfirm}
                      >
                        {booking.bookingConfirm ? 'Confirmed by Owner' : 'Edit'}
                      </button>

                      {
                        booking.bookingConfirm ? '' : (
                          <button
                            className="btn btn-danger ms-3"
                            onClick={() => deleteBooking(booking._id)}
                          >
                            Delete
                          </button>
                        )
                      }

                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }

  return ''
}

export default MyBookings