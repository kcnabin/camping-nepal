import { differenceInCalendarDays } from "date-fns"


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
        Total Nights : {differenceInCalendarDays(new Date(booking.checkOut), new Date(booking.checkIn))}
      </div>
      <div className="mb-1">
        Booking Price: NRs {booking.price.toLocaleString()}
      </div>

    </div>
  )
}

export default BookingInfo