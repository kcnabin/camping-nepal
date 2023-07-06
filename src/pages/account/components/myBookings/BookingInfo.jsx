import { dateDifference } from "../../../../helper/dateDifference"
import { getImgSrc } from "../../../../helper/getImgSrc";

const BookingInfo = ({ booking }) => {
  console.log('booking :', booking);
  return (
    <div className="">
      <div className="ratio ratio-4x3 card-img-top">
        <img
          src={getImgSrc(booking.bookedPlace.photos[0])}
          alt={booking.bookedPlace.name}
          className="img-fluid w-100 rounded-3"
        />
      </div>

      <div className="card-body">
        <div className="fw-semibold mb-1 text-truncate card-title">
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
          Total Nights : {dateDifference(booking.checkOut, booking.checkIn)}
        </div>

        <div className="mb-1">
          Booking Price: NRs {(booking.price * dateDifference(booking.checkOut, booking.checkIn)).toLocaleString()}
        </div>
      </div>

    </div>
  )
}

export default BookingInfo