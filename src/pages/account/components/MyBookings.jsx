import { useContext, useEffect, useState } from "react"
import axios from 'axios'
import { getBaseUrl } from "../../../helper/getBaseUrl"
import { getTokenHeader } from "../../../helper/getTokenHeader"
import BookingInfo from "./booking/BookingInfo"
import { useNavigate } from "react-router-dom"
import { DisplayInfoContext } from "../../../context/DisplayInfoContext"

const MyBookings = () => {
  const [myBooking, setMyBooking] = useState([])
  const [userBooking, setUserBooking] = useState([])
  const navigate = useNavigate()
  const {setInfo} = useContext(DisplayInfoContext)

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
    if (window.confirm('Confirm Booking?')) {
      try {
        const userBookingUrl = getBaseUrl() + '/user-booking/confirm/' + bookingId
        const {data} = await axios.put(userBookingUrl, {bookingConfirm: true}, getTokenHeader())
        setUserBooking(userBooking.map(booking => booking._id.toString() !== bookingId ? booking : data ))
  
      } catch (e) {
        console.log(e)
        setInfo('Unable to confirm booking')
      }
    }
  }

  const editBooking = (placeId, bookingId) => {
    navigate(`/places/${placeId}/edit/${bookingId}`)
  }

  const deleteBooking = async (bookingId) => {
    if (window.confirm('Want to delete booking?')) {
      try {
        const url = getBaseUrl() + '/booking/' + bookingId
        await axios.delete(url, getTokenHeader())
        setMyBooking(myBooking.filter(booking => booking._id.toString() !== bookingId))
      } catch (e) {
        console.log(e)
        setInfo('Unable to delete booking')
      }
    }
  } 

  if (myBooking || userBooking) {
    return (
      <div className="mt-3 mt-sm-0">
      
      { userBooking.length > 0 && 
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
      }
      
      {myBooking.length > 0 && 
        <div className="container-fluid">
          <h4 className="">
            My Booking
          </h4>
        
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
      }
      
      </div>
    )
  }


  return (
    <h4>
      No Booking
    </h4>
  )

}

export default MyBookings