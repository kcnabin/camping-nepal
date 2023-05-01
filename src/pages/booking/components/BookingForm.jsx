import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { getBaseUrl } from "../../../helper/getBaseUrl"
import { getTokenHeader } from "../../../helper/getTokenHeader"
import { differenceInCalendarDays } from 'date-fns'

const BookingForm = ({place}) => {
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [noOfPeople, setNoOfPeople] = useState('')
  const [name, setName] = useState((JSON.parse(localStorage.getItem('camper'))).name)
  const [contactNo, setContactNo] = useState('')

  const navigate = useNavigate()

  const bookPlace = async e => {
    e.preventDefault()
    const bookingObject = {
      bookedPlace: place._id.toString(),
      placeName: place.name,
      placeOwner: place.owner.toString(),
      checkIn,
      checkOut,
      contactName: name,
      contactNo,
      price: place.price
    }

    try {
      await axios.post(getBaseUrl() + '/booking', bookingObject, getTokenHeader())
      navigate('/account/bookings')

    } catch (e) {
      console.log(e)
      console.log('unable to book place')
    }

  }
  
  return (
    <form onSubmit={bookPlace}>
      <div className="ms-md-5 shadow py-3 px-4 h-100">
        <div className="">
          <span className="fs-5 fw-semibold">NRs {place.price}</span> / night
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
              min={new Date().toLocaleDateString()}
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
            Name
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
              type="text"
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
                Total Nights: {differenceInCalendarDays(new Date(checkOut), new Date(checkIn))}
              </div>
              <div className="mt-3">
                Total Amount: NRs. {(differenceInCalendarDays(new Date(checkOut), new Date(checkIn))) * place.price}
              </div>
            </div>
          ) : ""
        }
        

        <div className="mt-3">
          <button type="submit" className="btn btn-success">
            Reserve Place
          </button>
        </div>
      </div>
    </form>
    
  )
}

export default BookingForm