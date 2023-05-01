import { getImgSrc } from "../../helper/getImgSrc"


const EachPlace = ({place}) => {

  if (place) {
    return (
        <div>
          <div className="ratio ratio-4x3">
            <img 
              src={getImgSrc(place.photos[0])}
              alt={place.name}
              className="w-100 object-fit-cover rounded-3" 
            />
          </div>
          <div className="p-2 border">
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
        </div>
    )
  }
  return ''
}

export default EachPlace