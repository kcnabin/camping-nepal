import { getImgSrc } from "../../../helper/getImgSrc"
import HomeIcon from "../../../svg-icons/HomeIcon"
import LoadingIcon from "../../../svg-icons/LoadingIcon"
import LocationIcon from "../../../svg-icons/LocationIcon"

const EachPlace = ({ place }) => {

  if (place) {
    return (
      <div className="hover-zoom pb-4">
        <div className="ratio ratio-4x3">
          <img
            src={getImgSrc(place.photos[0])}
            alt={place.name}
            className="w-100 object-fit-cover rounded-3"
          />
        </div>

        <div className="border px-2 px-sm-3 py-2 ">
          <div className="fw-semibold mb-1 d-flex align-items-center">
            <HomeIcon />
            <span className="ms-2 font-sm text-truncate">
              {place.name}
            </span>
          </div>

          <div className="d-flex align-items-center">
            <LocationIcon />
            <span className="ms-2 text-truncate font-sm">
              {place.address}
            </span>
          </div>

          <div className="font-sm mt-1">
            NRs. <span className="fw-semibold h4 mb-0 font-sm text-success">
              {place.price.toLocaleString()}</span> / night
          </div>

        </div>
      </div>
    )
  }
  return <LoadingIcon />
}

export default EachPlace