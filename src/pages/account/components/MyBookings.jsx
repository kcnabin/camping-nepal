// import { Link } from 'react-router-dom'

import { useEffect, useState } from "react"
import axios from 'axios'
import { getBaseUrl } from "../../../helper/getBaseUrl"
import { getTokenHeader } from "../../../helper/getTokenHeader"
import EachPlace from "../../index/EachPlace"

const MyBookings = () => {
  const [myBooking, setMyBooking] = useState(null)
  console.log('myBooking :', myBooking);

  useEffect(() => {
    const fetchMyBooking = async () => {
      const bookingUrl = getBaseUrl() + '/booking'
      const {data} = await axios.get(bookingUrl, getTokenHeader())
      setMyBooking(data)
    }
    fetchMyBooking()
  }, [])
  
  if (myBooking?.length > 0) {
    return (
      <>
        {/* {
          myBooking.map(booking => {
            return (<EachPlace place={booking} key={booking._id} />)
          })
        } */}
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