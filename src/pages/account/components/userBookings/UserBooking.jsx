import axios from "axios"
import { useFetchData } from "../../../../customHooks/useFetchData"
import { getTokenHeader } from "../../../../helper/getTokenHeader"
import { handleError } from "../../../../helper/handleError"
import BookingInfo from "../myBookings/BookingInfo"

const UserBookings = () => {
  const userBookingUrl = '/user-booking'
  const { value: userBooking, setValue: setUserBooking } = useFetchData(userBookingUrl, '')

  const confirmBooking = async (bookingId) => {
    const userBookingUrl = '/user-booking/confirm/' + bookingId

    if (window.confirm('Confirm Booking?')) {
      try {
        const { data } = await axios.put(userBookingUrl, { bookingConfirm: true }, getTokenHeader())
        setUserBooking(userBooking.map(booking => booking._id.toString() !== bookingId ? booking : data))

      } catch (e) {
        handleError(e)
      }
    }
  }

  if (userBooking) {
    return (
      <div className="container-fluid">
        <h4 className="">
          Booking from customers
        </h4>

        <div className="row">
          {
            userBooking.map((booking, i) => {
              return (
                <div key={i} className="col-12 col-sm-6 col-lg-4 mt-2">
                  <div className="card">
                    <BookingInfo booking={booking} />

                    <div className="card-body py-0 mb-3">
                      <button
                        className="btn btn-success"
                        onClick={() => confirmBooking(booking._id)}
                        disabled={booking.bookingConfirm}
                      >
                        {booking.bookingConfirm ? 'Booking Confirmed' : 'Confirm'}
                      </button>

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

export default UserBookings