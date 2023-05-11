import { getImgSrc } from "../../../helper/getImgSrc"
import GridIcon from "../../../svg-icons/GridIcon"

const PhotoSection = ({ place, setAllPhotos }) => {
  return (
    <div className="position-relative overflow-hidden rounded-3 my-3">
      <div className="row overflow-hidden">
        <div className="col-12 col-sm-8 p-0">
          <div className="h-100 w-100 ratio ratio-4x3">
            <img 
              src={getImgSrc(place.photos[0])}
              alt={place.name}
              className="rounded-3 object-fit-cover img-fluid w-100"
            />
          </div>
        </div>

        <div className="col-sm-4 pe-0">
          <div className="d-none d-sm-flex flex-column">
            <div className="overflow-hidden ratio ratio-4x3">
              <img 
                src={getImgSrc(place.photos[1])}
                alt={place.name}
                className="object-fit-cover w-100 rounded-3"
              />
            </div>

            <div className="mt-3 ratio ratio-4x3">
              <img 
                src={getImgSrc(place.photos[2])}
                alt={place.name}
                className="object-fit-cover w-100 rounded-3"
              />
            </div>
          </div>
        </div>
      </div>


      <div className="btn position-absolute bottom-0 end-0 mb-3 me-3 rounded-2 py-1 px-2 btn btn-success border text-white">
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
  )
}

export default PhotoSection