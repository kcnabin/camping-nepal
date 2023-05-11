import { useState } from "react"
import { useParams } from "react-router-dom"
import { getBaseUrl } from "../../helper/getBaseUrl"
import { useFetchData } from "../../customHooks/useFetchData"
import BookingForm from "./components/BookingForm"
import PlaceTitleAddress from "./components/PlaceTitleAddress"
import OnlyPhotos from "./components/OnlyPhotos"
import PhotoSection from "./components/PhotoSection"
import DescriptionSection from "./components/DescriptionSection"

const BookingPage = () => {
  const {placeId} = useParams()
  const placeUrl = getBaseUrl() + '/places/' + placeId
  
  const {value: place} = useFetchData(placeUrl, placeId)
  const [allPhotos, setAllPhotos] = useState(false)

  if (!(place.length <= 0)) {
    if (allPhotos) {
      return (
        <OnlyPhotos 
          photos={place.photos} 
          setAllPhotos={setAllPhotos} 
          name={place.name} 
        />
      )
    } 

    return (
      <div className="my-3 overflow-hidden px-3 px-sm-0 container">

        <PlaceTitleAddress 
          name={place.name} 
          address={place.address} 
        />
            
        <PhotoSection 
          place={place} 
          setAllPhotos={setAllPhotos} 
        />

        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-md-6 p-0 m-0">
              <DescriptionSection place={place} />
            </div>

            <div className="col-12 col-md-6 p-0 m-0">
              <BookingForm place={place} />
            </div>
          </div>
        </div>

      </div>
    ) 
  } 

  return ''
  
}

export default BookingPage