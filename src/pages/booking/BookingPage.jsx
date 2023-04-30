import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'
import { getBaseUrl } from "../../helper/getBaseUrl"
import LocationIcon from "../../svg-icons/LocationIcon"
import { getImgSrc } from "../../helper/getImgSrc"
import GridIcon from "../../svg-icons/GridIcon"
import BookingForm from "./BookingForm"


const BookingPage = () => {
  const {placeId} = useParams()
  const [place, setPlace] = useState('')

  useEffect(() => {
    const fetchPlace = async () => {
      const placeUrl = getBaseUrl() + '/places/' + placeId
      
      try {
        const fetchedPlace = await axios.get(placeUrl)
        setPlace(fetchedPlace.data)

      } catch (e) {
        console.log(e)
        alert('unable to fetch place')
      }
    }

    fetchPlace()
    
  }, [placeId])

  if (place) {
    return (
      <div className="my-3">
        <div>
          <h3>
            {place.name}
          </h3>
        </div>

        <div className="">
          <span>
            <LocationIcon />
            <a 
              href="https://www.google.com/"
              className="ms-2 text-dark  text-muted"
              target="_blank"
            >
              {place.address}
            </a>
          </span>
        </div>

        <div className="p-0">
          <div className="position-relative">
            <div className="my-3 row rounded-3 overflow-hidden">
              <div className="col-12 col-sm-8 p-0">
                <div className="h-100 ratio ratio-16x9 overflow-hidden">
                  <img 
                    src={place ? getImgSrc(place.photos[0]) : ''}
                    alt={place.name}
                    className="h-100"
                  />
                </div>
              </div>

              <div className="col-sm-4 pe-0">
                <div className="d-none d-sm-flex flex-column">
                  <div className="w-100">
                    <img 
                      src={place ? getImgSrc(place.photos[1]) : ''}
                      alt={place.name}
                      className="object-fit-cover w-100"
                    />
                  </div>

                  <div className="mt-3  ">
                    <img 
                      src={place ? getImgSrc(place.photos[2]) : ''}
                      alt={place.name}
                      className="object-fit-cover w-100"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="position-absolute bottom-0 end-0 mb-3 me-2 rounded-2 py-1 px-2 btn btn-success border text-white">
              <div className="d-flex align-items-center">
                <GridIcon />
                <span className="ms-2">
                  More
                </span>
              </div>
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
                <ul>
                  {

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