import { getImgSrc } from "../../../helper/getImgSrc"


const OnlyPhotos = ({ setAllPhotos, photos, name }) => {
  return (
    <div className="container">
      <div className="mt-2 d-flex justify-content-between align-items-center">
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
                className="mb-3 img-fluid rounded-4"
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default OnlyPhotos