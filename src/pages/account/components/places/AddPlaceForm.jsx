import { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import AddFacilities from './AddFacilities'
import { getBaseUrl } from '../../../../helper/getBaseUrl'
import { getTokenHeader } from '../../../../helper/getTokenHeader'

const AddPlaceForm = ({ setPageForm, setMyPlaces, myPlaces }) => {
  const { placeId } = useParams()
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [photos, setPhotos] = useState([])
  const [descriptions, setDescriptions] = useState('')
  const [facilities, setFacilities] = useState([])
  const [guestsNum, setGuestNum] = useState('')
  const [price, setPrice] = useState('')

  const clearForm = () => {
    setName('')
    setAddress('')
    setPhotos([])
    setDescriptions('')
    setFacilities([])
    setGuestNum('')
    setPrice('')
  }

  const addNewCamp = async e => {
    e.preventDefault()

    const placeUrl = getBaseUrl() + '/places'
    const newPlace = {
      name, address, photos, descriptions, facilities, guestsNum, price
    }

    try {
      const savedPlace = await axios.post(placeUrl, newPlace, getTokenHeader())
      clearForm()
      setMyPlaces(myPlaces.concat(savedPlace.data))
      setPageForm(false)

    } catch (e) {
      console.log(e)
      alert('Error saving new place')
    }
  }

  

  return (
    <div className='container'>
      <div className='row my-3'>
        <h5 className='text-center mb-3'>
          { placeId ? 'Edit Camp' : 'Add New Camp'  }
        </h5>
        
        <form onSubmit={addNewCamp} className='text-dark fw-semibold'>
          <div className="">
            <label htmlFor="" className="form-label">
              Campsite Name
            </label>

            <input 
              type="text"
              className='form-control mb-3'
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>

          <div className="">
            <label htmlFor="" className="form-label">
              Campsite Address
            </label>

            <input 
              type="text"
              className='form-control mb-3'
              value={address}
              onChange={e => setAddress(e.target.value)}
            />
          </div>

          <div className="">
            <label htmlFor="" className="form-label">
              Descriptions
            </label>

            <input 
              type="text"
              className='form-control mb-3'
              value={descriptions}
              onChange={e => setDescriptions(e.target.value)}
            />
          </div>

          <AddFacilities facilities={facilities} setFacilities={setFacilities} />

          <div className="">
            <label htmlFor="" className="form-label">
              Max no. of guests
            </label>

            <input 
              type="number"
              className='form-control mb-3'
              value={guestsNum}
              onChange={e => setGuestNum(e.target.value)}
            />
          </div>

          <div className="">
            <label htmlFor="" className="form-label">
              Price per night ($)
            </label>

            <input 
              type="number"
              className='form-control mb-3'
              value={price}
              onChange={e => setPrice(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-success">
            Add Place
          </button>
        </form>
      </div>

      {/* <div>
        <button
        type='button'
          onClick={() => setPageForm(false)}
          className="btn btn-danger mt-2"
        >
          Cancel
        </button>
      </div> */}
    </div>
  )
}

export default AddPlaceForm