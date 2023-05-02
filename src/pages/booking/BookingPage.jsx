import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'
import { getBaseUrl } from "../../helper/getBaseUrl"
import { getImgSrc } from "../../helper/getImgSrc"
import GridIcon from "../../svg-icons/GridIcon"
import BookingForm from "./components/BookingForm"
import PlaceTitleAddress from "./components/PlaceTitleAddress"
import { DisplayInfoContext } from "../../context/DisplayInfoContext"
import OnlyPhotos from "./components/OnlyPhotos"

const BookingPage = () => {
  const {placeId} = useParams()
  const [place, setPlace] = useState('')
  const [allPhotos, setAllPhotos] = useState(false)
  const { setInfo } = useContext(DisplayInfoContext)

  useEffect(() => {
    const fetchPlace = async () => {
      const placeUrl = getBaseUrl() + '/places/' + placeId
      
      try {
        const fetchedPlace = await axios.get(placeUrl)
        setPlace(fetchedPlace.data)

      } catch (e) {
        setInfo(e.response.data.err)
        setTimeout(() => setInfo(''), 3000)
      }
    }

    fetchPlace()
    
  }, [placeId])

  if (place) {
    if (allPhotos) {
      return (
        <OnlyPhotos photos={place.photos} setAllPhotos={setAllPhotos} name={place.name} />
      )
    }

    return (
      <div className="my-3 overflow-hidden px-4 px-sm-0 container">
        <PlaceTitleAddress name={place.name} address={place.address} />

        <div className="position-relative">
          <div className="my-3 row rounded-3">
            <div className="col-12 col-sm-8 p-0">
              <div className="h-100 w-100 ratio ratio-16x9">
                <img 
                  src={getImgSrc(place.photos[0])}
                  alt={place.name}
                  className="rounded-3"
                />
              </div>
            </div>

            <div className="col-sm-4 pe-0">
              <div className="d-none d-sm-flex flex-column">
                <div className="overflow-hidden">
                  <img 
                    src={getImgSrc(place.photos[1])}
                    alt={place.name}
                    className="object-fit-cover w-100 rounded-3"
                  />
                </div>

                <div className="mt-3  ">
                  <img 
                    src={getImgSrc(place.photos[2])}
                    alt={place.name}
                    className="object-fit-cover w-100 rounded-3"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="btn position-absolute bottom-0 end-0 mb-3 me-2 rounded-2 py-1 px-2 btn btn-success border text-white">
            <div
              onClick={() => setAllPhotos(true)}
              className="d-flex align-items-center"
            >
              <GridIcon />
              <span className="ms-2">
                More
              </span>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-6 p-0 m-0">
              <div>
                <h5>What this place offers</h5>
                <p className="text-muted mt-3">
                  {place.descriptions}
                </p>
                <h5>Facilities</h5>
                <ul>
                  {
                    place.facilities.map((facility, i) => <li key={i}>{facility}</li>)
                  }
                </ul>
              </div>
            </div>

            <div className="col-12 col-md-6 p-0 m-0">
              <BookingForm place={place} />
            </div>
          </div>
        </div>
      </div>
    )
  }
  return
}

export default BookingPage