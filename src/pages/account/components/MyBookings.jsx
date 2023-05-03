import { useEffect, useState } from "react"
import axios from 'axios'
import { getBaseUrl } from "../../../helper/getBaseUrl"
import { getTokenHeader } from "../../../helper/getTokenHeader"
import BookingInfo from "./booking/BookingInfo"

const MyBookings = () => {
  const [myBooking, setMyBooking] = useState([])
  const [userBooking, setUserBooking] = useState([])

  useEffect(() => {
    const fetchMyBooking = async () => {
      const bookingUrl = getBaseUrl() + '/booking'
      const {data} = await axios.get(bookingUrl, getTokenHeader())
      setMyBooking([...data].reverse())
    }
    
    const fetchUserBooking = async () => {
      const userBookingUrl = getBaseUrl() + '/user-booking'
      const {data} = await axios.get(userBookingUrl, getTokenHeader())
      setUserBooking([...data].reverse())
    }

    fetchMyBooking()
    fetchUserBooking()
  }, [])

  const confirmBooking = async (bookingId) => {
    try {
      const userBookingUrl = getBaseUrl() + '/user-booking/confirm/' + bookingId
      const {data} = await axios.put(userBookingUrl, {bookingConfirm: true}, getTokenHeader())
      setUserBooking(userBooking.map(booking => booking._id.toString() !== bookingId ? booking : data ))

    } catch (e) {
      console.log(e)
      alert('Unable to confirm booking')
    }
  }

  
  if (myBooking || userBooking) {
    return (
      <>
      
      <div className="container-fluid">
        <h4 className="text-center mt-3 mt-sm-0">
          {userBooking.length > 0 ? 'Booking from customers' : ''}
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
      
      <h4 className="text-center mt-3">
        {myBooking.length > 0 ? 'My Booking' : ''}
      </h4>
      <div className="container-fluid">
        <div className="row">
          {
            myBooking.map((booking, i) => {
              return (
                
                  <div key={i} className="col-12 col-sm-6 col-lg-4 mt-2">
                    <div className="border p-3 rounded-4">
                      <BookingInfo booking={booking} />

                      <div className="mt-3">
                        <button 
                          className={booking.bookingConfirm ? "btn btn-success" : "btn btn-secondary"}
                          onClick={() => {}}
                          disabled={booking.bookingConfirm}
                        >
                          {booking.bookingConfirm ? 'Confirmed by Owner' : 'Edit'}
                        </button>

                        {
                          booking.bookingConfirm ? '' : (
                            <button 
                              className="btn btn-danger ms-3"
                              onClick={() => {}}
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
      
      </>
    )
  }


  return (
    <h4>
      No Booking
    </h4>
  )

}

export default MyBookings