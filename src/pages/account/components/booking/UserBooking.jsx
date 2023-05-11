import axios from "axios"
import { useFetchData } from "../../../../customHooks/useFetchData"
import { getBaseUrl } from "../../../../helper/getBaseUrl"
import { getTokenHeader } from "../../../../helper/getTokenHeader"
import { handleError } from "../../../../helper/handleError"
import { useContext } from "react"
import { DisplayInfoContext } from "../../../../context/DisplayInfoContext"
import BookingInfo from "./BookingInfo"

const UserBookings = () => {
  const userBookingUrl = getBaseUrl() + '/user-booking'
  const {value: userBooking, setValue: setUserBooking} = useFetchData(userBookingUrl, '')

  const { setInfo } = useContext(DisplayInfoContext)

  const confirmBooking = async (bookingId) => {
    const userBookingUrl = getBaseUrl() + '/user-booking/confirm/' + bookingId

    if (window.confirm('Confirm Booking?')) {
      try {
        const {data} = await axios.put(userBookingUrl, {bookingConfirm: true}, getTokenHeader())
        setUserBooking(userBooking.map(booking => booking._id.toString() !== bookingId ? booking : data ))
  
      } catch (e) {
        handleError(e, setInfo)
      }
    }
  }

  if (userBooking) {
    return (
      <div className="container-fluid mb-3">
        <h4 className="mt-3 mt-sm-0 ps-sm-3">
          Booking from customers
        </h4>
        
        <div className="row">
          {
            userBooking.map((booking, i) => {
              return (
                <div key={i} className="col-12 col-sm-6 col-lg-4 mt-2">
                  <div className="border p-3 rounded-4">
                    <BookingInfo booking={booking} />

                    <div className="mt-3">
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