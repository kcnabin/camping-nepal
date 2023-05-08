import { useState, useEffect, useContext } from "react"
import AddIcon from "../../../svg-icons/AddIcon"
import AddPlaceForm from "./places/AddPlaceForm"
import axios from "axios"
import { getBaseUrl } from "../../../helper/getBaseUrl"
import { getTokenHeader } from "../../../helper/getTokenHeader"
import { getImgSrc } from "../../../helper/getImgSrc"
import { Link, useNavigate } from "react-router-dom"
import { handleError } from "../../../helper/handleError"
import { DisplayInfoContext } from "../../../context/DisplayInfoContext"

const MyPlaces = () => {
  const [pageForm, setPageForm] = useState(false)
  const [myPlaces, setMyPlaces] = useState([])

  const { setInfo } = useContext(DisplayInfoContext)

  useEffect(() => {
    const fetchMyPlaces = async () => {
      try {
        const placeUrl = getBaseUrl() + '/places'
        const {data} = await axios.get(placeUrl, getTokenHeader())
        setMyPlaces(data)
      
      } catch (e) {
        handleError(e, setInfo)
      }
    }
    fetchMyPlaces()
  }, [])

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

  if (!pageForm) {
    return (
      <div>
        <div
          onClick={() => setPageForm(true)}
          className="d-flex justify-content-center flex-grow-1 btn p-0"
        >
          <div className="d-flex align-items-center bg-success text-white py-2 px-3 rounded-4 mt-2 mt-sm-0">
            <AddIcon />
            <span className="ms-2">
              Add New Camp
            </span>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            {
              myPlaces.map(place => {
                return (
                  
                    <div key={place._id} className="col-12 col-sm-6 col-lg-4 my-3 h-100 text-decoration-none text-dark"
                      
                    >
                      <div className="ratio ratio-4x3">
                        <img
                          src={getImgSrc(place.photos[1])}
                          className="img-fluid object-fit-cover rounded-4"
                          alt={place.name}
                        />
                      </div>

                      <div className="border p-2">
                        <div className="">
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

                          <Link className="btn btn-info text-white ms-2"
                            to={'/account/places/' + place._id.toString()}
                          >
                            Edit
                          </Link>

                          <Link 
                            to={'/places/'+ place._id.toString() + '/view'}
                            className="btn btn-secondary text-white ms-2"
                          >
                            View
                          </Link>
                        </div>
                      </div>
                    </div>
                    
                )
              })
            }
          </div>
        </div>

      </div>
    )
  }

  return (
    <AddPlaceForm 
      setPageForm={setPageForm} 
      setMyPlaces={setMyPlaces}
      myPlaces={myPlaces}
    />
  )
}

export default MyPlaces