import { getImgSrc } from "../../../helper/getImgSrc"


const OnlyPhotos = ({ setAllPhotos, photos, name }) => {
  return (
    <div className="container px-3 px-sm-0">
      <div className="mt-2 d-flex justify-content-between align-items-center position-sticky top-0 bg-white">
        <div className="h4 m-0 p-0">
          {name}
        </div>

        <button
          onClick={() => setAllPhotos(false)}
          className="btn btn-light border"
        >
          X
        </button>
      </div>
      <div className="my-3">
        {
          photos.map(photo => {
            return (
              <img 
                src={getImgSrc(photo)}
                alt={photo}
                className="mb-3 w-100 img-fluid rounded-4"
                key={photo}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default OnlyPhotos