import axios from "axios"
import { useFetchData } from "../../../../customHooks/useFetchData"
import { getTokenHeader } from "../../../../helper/getTokenHeader"
import { handleError } from "../../../../helper/handleError"
import BookingInfo from "./BookingInfo"
import { useNavigate } from 'react-router-dom'

const MyBookings = () => {
  const bookingUrl = '/booking'
  const { value: myBooking, setValue: setMyBooking } = useFetchData(bookingUrl, '')
  const navigate = useNavigate()

  const editBooking = (placeId, bookingId) => {
    navigate(`/places/${placeId}/edit/${bookingId}`)
  }

  const deleteBooking = async (bookingId) => {
    const url = '/booking/' + bookingId

    if (window.confirm('Want to delete booking?')) {
      try {
        await axios.delete(url, getTokenHeader())
        setMyBooking(myBooking.filter(booking => booking._id.toString() !== bookingId))

      } catch (e) {
        handleError(e)
      }
    }
  }

  if (myBooking) {
    return (
      <div className="container-fluid">
        <h4 className="">
          My Booking
        </h4>

        <div className="row">
          {
            myBooking.map((booking, i) => {
              return (
                <div key={i} className="col-12 col-sm-6 col-lg-4 mt-2">
                  <div className="card">
                    <BookingInfo booking={booking} />

                    <div className="mt-3">
                      <button
                        className={booking.bookingConfirm ? "btn btn-success" : "btn btn-secondary"}
                        onClick={() => editBooking(booking.bookedPlace, booking._id)}
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