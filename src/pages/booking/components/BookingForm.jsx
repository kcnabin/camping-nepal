import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { getBaseUrl } from "../../../helper/getBaseUrl"
import { getTokenHeader } from "../../../helper/getTokenHeader"
import { DisplayInfoContext } from "../../../context/DisplayInfoContext"
import { dateDifference } from "../../../helper/dateDifference"
import { handleError } from "../../../helper/handleError"

const BookingForm = ({place}) => {
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [noOfPeople, setNoOfPeople] = useState('')
  const [name, setName] = useState((JSON.parse(localStorage.getItem('camper'))).name)
  const [contactNo, setContactNo] = useState('')
  const [myBooking, setMyBooking] = useState({})

  const navigate = useNavigate()
  const { bookingId } = useParams()
  const { action } = useParams()
  const { setInfo } = useContext(DisplayInfoContext)

  useEffect(() => {
    if (bookingId) {
      const fetchBooking = async () => {
        try {
          const bookingUrl = getBaseUrl() + '/booking/' + bookingId
          const {data} = await axios.get(bookingUrl, getTokenHeader())

          setMyBooking(data)
          setCheckIn((data.checkIn))
          setCheckOut((data.checkOut))
          setNoOfPeople(data.noOfPeople || 5)
          setName(data.contactName)
          setContactNo(data.contactNo)

        } catch (e) {
          handleError(e, setInfo)
        }
      }

      fetchBooking()
    } 

  }, [bookingId])

  const bookPlace = async e => {
    e.preventDefault()

    const bookingObject = {
      bookedPlace: place._id.toString(),
      placeName: place.name,
      placeOwner: place.owner.toString(),
      checkIn: checkIn.toString(),
      checkOut: checkOut.toString(),
      contactName: name,
      contactNo,
      price: place.price,
      noOfPeople
    }

    const bookingToUpdate = {
      bookingBy: myBooking.bookingBy,
      bookingConfirm: myBooking.bookingConfirm,
      ...bookingObject
    }

    if (bookingId) {
      try {
        const url = getBaseUrl() + '/booking/' + bookingId
        await axios.put(url, bookingToUpdate, getTokenHeader())

      } catch (e) {
        return handleError(e, setInfo)
      }

    } else {
      try {
        const url = getBaseUrl() + '/booking'
        await axios.post(url, bookingObject, getTokenHeader())

      } catch (e) {
        return handleError(e, setInfo)
      }
    }
    navigate('/account/bookings')
  }
  
  return (
    <form onSubmit={bookPlace}>
      <div className="ms-md-5 shadow py-3 px-4 h-100">
        <div className="">
          <span className="fs-5 fw-semibold">
            NRs {place.price.toLocaleString()}
          </span>
          <span className="ms-1">/ night</span>
        </div>

        <div className="d-flex flex-wrap gap-3 mt-3">
          <div className="flex-grow-1">
            <span>
              Check In
            </span>
            <input
              type="date"
              className="form-control border border-secondary mt-2 w-100"
              value={checkIn}
              onChange={e => setCheckIn(e.target.value)}
              required
            />
          </div>

          <div className="flex-grow-1">
            <span>
              Check Out
            </span>
            <input
              type="date"
              className="form-control border border-secondary mt-2 w-100"
              value={checkOut}
              onChange={e => setCheckOut(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="mt-3">
          <span>
            Number of people
          </span>
          <input
            type="number"
            className="form-control border border-secondary mt-2"
            value={noOfPeople}
            onChange={e => setNoOfPeople(e.target.value)}
            required
          />
        </div>

        <div className="mt-3">
          <span>
            Contact Name
          </span>
          <input
            type="text"
            className="form-control border border-secondary mt-2"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
        </div>

        <div className="mt-3">
          <span>
            Contact Number
          </span>
          <div>
            <input
              type="number"
              className="form-control border border-secondary mt-2"
              value={contactNo}
              onChange={e => setContactNo(e.target.value)}
              required
            />
          </div>
        </div>

        {
          (checkIn !== '' && checkOut !== '') ? (
            <div className=" fw-bold">
              <div className="mt-3">
                Total Nights: {dateDifference(checkOut, checkIn)}
              </div>
              <div className="mt-3">
                Total Amount: NRs. {
                  (dateDifference(checkOut, checkIn) 
                    * place.price).toLocaleString()
                }
              </div>
            </div>
          ) : ""
        }
        

        <div className="mt-3">
          <button 
            type="submit" 
            className="btn btn-success"
            disabled={action === 'view'}
          >
            {bookingId ? 'Update Booking' : 'Reserve Place'}
          </button>
        </div>
      </div>
    </form>
    
  )
}

export default BookingForm