import { differenceInCalendarDays } from "date-fns"
import { dateDifference } from "../../../../helper/dateDifference"


const BookingInfo = ({booking}) => {
  return (
    <div className="">
      <div className="fw-semibold mb-1 text-truncate">
        Booked Place: {booking.placeName}
      </div>
      <div className="fw-semibold mb-3 text-truncate">
        Booking By: {booking.contactName}
      </div>
      <div className="mb-1">
        Booking from : {(new Date(booking.checkIn)).toLocaleDateString()}
      </div>
      <div className="mb-1">
        Booking To : {(new Date(booking.checkOut)).toLocaleDateString()}
      </div>
      <div className="mb-1">
        Total Nights : { dateDifference(booking.checkOut, booking.checkIn)}
      </div>
      <div className="mb-1">
        Booking Price: NRs {(booking.price * dateDifference(booking.checkOut, booking.checkIn)).toLocaleString()}
      </div>

    </div>
  )
}

export default BookingInfo