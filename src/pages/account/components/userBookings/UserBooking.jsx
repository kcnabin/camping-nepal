import axios from "axios"
import { useFetchData } from "../../../../customHooks/useFetchData"
import { getTokenHeader } from "../../../../helper/getTokenHeader"
import { handleError } from "../../../../helper/handleError"
import BookingInfo from "../myBookings/BookingInfo"
import { useEffect, useState } from "react"

const UserBookings = () => {
  const userBookingUrl = '/user-booking'
  const filters = ['Date: Latest']
  const { value: userBooking } = useFetchData(userBookingUrl, '')
  const [bookings, setBookings] = useState('')

  useEffect(() => {
    if (userBooking) {
      const sortedBookings = [...userBooking].sort(
        (bookingA, bookingB) => new Date(bookingB.checkIn) - new Date(bookingA.checkIn))
      setBookings(sortedBookings)
    }
  }, [userBooking])

  const confirmBooking = async (bookingId) => {
    const userBookingUrl = '/user-booking/confirm/' + bookingId

    if (window.confirm('Confirm Booking?')) {
      try {
        const { data } = await axios.put(userBookingUrl, { bookingConfirm: true }, getTokenHeader())
        setBookings(bookings.map(booking => booking._id.toString() !== bookingId ? booking : data))

      } catch (e) {
        handleError(e)
      }
    }
  }

  if (bookings) {
    return (
      <div className="container-fluid">
        <div className="align-center justify-content-between mb-2">
          <h4 className="">
            Customer Booking
          </h4>
          <div className='align-center ms-sm-2 mt-3 mt-sm-0'>
            <div>
              <select
                className='form-select'
              >
                {
                  filters.map((f, i) => (
                    <option value={f} key={i}>
                      {f}
                    </option>
                  ))
                }

              </select>
            </div>
          </div>
        </div>

        <div className="row">
          {
            bookings.map((booking, i) => {
              return (
                <div key={i} className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 mt-2">
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