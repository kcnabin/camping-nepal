import axios from 'axios'
import { getImgSrc } from '../../../../../helper/getImgSrc'
import { getBaseUrl } from '../../../../../helper/getBaseUrl'
import { getTokenHeader } from '../../../../../helper/getTokenHeader'
import { handleError } from '../../../../../helper/handleError'
import { useContext } from 'react'
import { UserContext } from '../../../../../context/UserContext'
import { Link } from 'react-router-dom'

const DisplayEachPlace = ({ place, myPlaces, setMyPlaces }) => {
  const { setInfo } = useContext(UserContext)

  const deletePlace = async (placeId, placeName) => {
    const msg = `Do you want to delete place "${placeName}"? Once deleted, place can't be recovered again!`

    if (window.confirm(msg)) {
      try {
        const deleteUrl = getBaseUrl() + '/places/' + placeId.toString()
        await axios.delete(deleteUrl, getTokenHeader())
        setMyPlaces(myPlaces.filter(place => place._id.toString() !== placeId.toString()))

      } catch (e) {
        return handleError(e, setInfo)
      }
    }
  }

  return (
    <div
      key={place._id}
      className="col-12 col-sm-6 col-lg-4 p-0 card rounded-4 overflow-hidden"
    >
      <div className="card-img-top ratio ratio-4x3">
        <img
          src={getImgSrc(place.photos[1])}
          className="img-fluid object-fit-cover"
          alt={place.name}
        />
      </div>

      <div className="card-body">
        <div>
          <div className="fw-semibold mb-1">
            {place.name}
          </div>

          <div className="mb-1">
            {place.address}
          </div>

          <div className="">
            NRs. <span className="fw-semibold fs-4">{place.price.toLocaleString()}</span> / night
          </div>

        </div>

        <div className="mt-2">
          <button
            className="btn btn-danger"
            onClick={() => deletePlace(place._id, place.name)}
          >
            Delete
          </button>

          <Link
            className="btn btn-info text-white ms-2"
            to={'/account/places/' + place._id.toString()}
          >
            Edit
          </Link>

          <Link
            to={'/places/' + place._id.toString() + '/view'}
            className="btn btn-secondary text-white ms-2"
          >
            View
          </Link>
        </div>

      </div>
    </div>
  )
}

export default DisplayEachPlace