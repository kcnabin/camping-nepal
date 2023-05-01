import { useState, useEffect } from "react"
import AddIcon from "../../../svg-icons/AddIcon"
import AddPlaceForm from "./places/AddPlaceForm"
import axios from "axios"
import { getBaseUrl } from "../../../helper/getBaseUrl"
import { getTokenHeader } from "../../../helper/getTokenHeader"
// import EachPlace from "../../index/EachPlace"
import { getImgSrc } from "../../../helper/getImgSrc"
import { Link } from "react-router-dom"


const MyPlaces = () => {
  const [pageForm, setPageForm] = useState(false)
  const [myPlaces, setMyPlaces] = useState([])

  useEffect(() => {
    const fetchMyPlaces = async () => {
      const placeUrl = getBaseUrl() + '/places'
      const {data} = await axios.get(placeUrl, getTokenHeader())
      setMyPlaces(data)
    }
    fetchMyPlaces()
  }, [])

  const deletePlace = async (placeId, placeName) => {
    const msg = `Do you want to delete place "${placeName}"? Once deleted, place can't be recovered again!`

    if (window.confirm(msg)) {
      try {
        const deleteUrl = getBaseUrl() + '/places/' + placeId
        await axios.delete(deleteUrl, getTokenHeader())
        setMyPlaces(myPlaces.filter(place => place._id.toString() !== placeId))

      } catch (e) {
        console.log(e)
        alert('Error deleting place')
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
          <div className="d-flex align-items-center bg-success text-white p-2 rounded-2">
            <AddIcon />
            <span className="ms-2">
              Add Camp
            </span>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            {
              myPlaces.map(place => {
                return (
                  
                    <div key={place._id} className="col-12 col-sm-6 col-lg-4 my-4 h-100 hover-zoom">
                      <div className="ratio ratio-4x3">
                        <img
                          src={getImgSrc(place.photos[1])}
                          className="img-fluid object-fit-cover rounded-4"
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
                            NRs. <span className="fw-semibold fs-4">{place.price}</span> / night
                          </div>

                        </div>

                        <div className="mt-2">
                          <button 
                            className="btn btn-danger"
                            onClick={() => deletePlace(place._id, place.name)}
                          >
                            Delete
                          </button>

                          <Link to={'/account/places/' + place._id.toString()} className="btn btn-info text-white ms-2">
                            Edit
                          </Link>

                          <button className="btn btn-secondary text-white ms-2">
                            View
                          </button>
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