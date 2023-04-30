// import { Link } from 'react-router-dom'

import { useEffect, useState } from "react"
import axios from 'axios'
import { getBaseUrl } from "../../../helper/getBaseUrl"
import { getTokenHeader } from "../../../helper/getTokenHeader"

const MyBookings = () => {
  const [myBooking, setMyBooking] = useState(null)

  useEffect(() => {
    const fetchMyBooking = async () => {
      const bookingUrl = getBaseUrl() + '/booking'
      const {data} = await axios.get(bookingUrl, getTokenHeader())
      setMyBooking(data)
    }
    fetchMyBooking()
  }, [])
  
  if (myBooking) {
    return (
      <>
        My Bookings
      </>
    )
  }

  return
}

export default MyBookings