import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import AddFacilities from './AddFacilities'
import { getBaseUrl } from '../../../../helper/getBaseUrl'
import { getTokenHeader } from '../../../../helper/getTokenHeader'
import AddPhotosByLink from './AddPhotosByLink'
import { getImgSrc } from '../../../../helper/getImgSrc'
import PhotoUploader from './PhotoUploader'
import { DisplayInfoContext } from '../../../../context/DisplayInfoContext'
import { handleError } from '../../../../helper/handleError'

const AddPlaceForm = ({ setPageForm, setMyPlaces, myPlaces }) => {
  const { placeId } = useParams()
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [photos, setPhotos] = useState([])
  const [descriptions, setDescriptions] = useState('')
  const [facilities, setFacilities] = useState([])
  const [guestsNum, setGuestNum] = useState('')
  const [price, setPrice] = useState('')
  const [placeToEdit, setPlaceToEdit] = useState([])

  const navigate = useNavigate()
  const { setInfo } = useContext(DisplayInfoContext)

  useEffect(() => {
    if (placeId) {
      const fetchPlaceForEdit = async () => {
        const placeUrl = getBaseUrl() + '/places/' + placeId
        try {
          const {data} = await axios.get(placeUrl)
          setPlaceToEdit(data)
          setName(data.name)
          setAddress(data.address)
          setPhotos(data.photos)
          setDescriptions(data.descriptions)
          setFacilities(data.facilities)
          setGuestNum(data.guestsNum)
          setPrice(data.price)

        } catch (e) {
          handleError(e, setInfo)
        }
        
      }

      fetchPlaceForEdit()
    }
  }, [placeId])

  const clearForm = () => {
    setName('')
    setAddress('')
    setPhotos([])
    setDescriptions('')
    setFacilities([])
    setGuestNum('')
    setPrice('')
    setPlaceToEdit([])
  }

  const addNewCamp = async e => {
    e.preventDefault()
    
    if (placeId) {
      try {
        const updatePlaceUrl = getBaseUrl() + '/places/' + placeId
        const placeToUpdate = {
          name, address, photos, descriptions, facilities, guestsNum, price, owner: placeToEdit.owner
        }
    
        await axios.put(updatePlaceUrl, placeToUpdate, getTokenHeader())
        // setPageForm(false)
        clearForm()
        navigate('/account/places')
        

      } catch (e) {
        handleError(e, setInfo)
      }

    } else {
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
        handleError(e, setInfo)
      }
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

          <AddPhotosByLink
            photos={photos}
            setPhotos={setPhotos}
          />

          <PhotoUploader
            photos={photos}
            setPhotos={setPhotos}
          />

          <div className="d-flex flex-wrap my-3 gap-2">
            {
              photos.map((photo, i) => {
                return (
                  <div className="img-thumbnails ratio ratio-16x9" key={i}>
                    <img
                      src={getImgSrc(photo)}
                      className='w-100 object-fit-cover rounded-3'
                      alt='uploaded photos'
                    />
                  </div>
                )
              })
            }
          </div>

          <div className="">
            <label htmlFor="" className="form-label">
              Descriptions
            </label>
            <textarea
              type="text"
              className='form-control mb-3'
              value={descriptions}
              onChange={e => setDescriptions(e.target.value)}
            ></textarea>
          </div>

          <AddFacilities 
            facilities={facilities} 
            setFacilities={setFacilities} 
          />

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
              Price per night (NRs)
            </label>

            <input 
              type="number"
              className='form-control mb-3'
              value={price}
              onChange={e => setPrice(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-success">
            {placeId ? 'Update Place' : 'Add Place'}
          </button>
        </form>
      </div>

    </div>
  )
}

export default AddPlaceForm