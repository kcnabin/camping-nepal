import { getImgSrc } from "../../helper/getImgSrc"
import HomeIcon from "../../svg-icons/HomeIcon"
import LocationIcon from "../../svg-icons/LocationIcon"

const EachPlace = ({place}) => {

  if (place) {
    return (
        <div className="px-4 px-sm-0 mb-2">
          <div className="ratio ratio-4x3">
            <img 
              src={getImgSrc(place.photos[0])}
              alt={place.name}
              className="w-100 object-fit-cover rounded-3" 
            />
          </div>

          <div className="p-2 border border-2">
            <div className="fw-semibold mb-1 d-flex align-items-center">
              <HomeIcon />
              <span className="ms-2">{place.name}</span>
            </div>

            <div className="mb-1 d-flex align-items-center">
              <LocationIcon />
              <span className="ms-2">{place.address}</span>
            </div>

            <div className="">
              NRs. <span className="fw-semibold fs-4">{place.price.toLocaleString()}</span> / night
            </div>

          </div>
        </div>
    )
  }
  return ''
}

export default EachPlace