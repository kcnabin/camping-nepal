import HomeIcon from "../../../svg-icons/HomeIcon"
import LocationIcon from "../../../svg-icons/LocationIcon"

const PlaceTitleAddress = ({name, address}) => {
  return (
    <>
    <div className="d-flex align-items-center">
      <HomeIcon size="20px" />
      <h4 className="p-0 m-0 ms-3">
        {name}
      </h4>
    </div>

    <div className="d-flex align-items-center mt-3">
      <LocationIcon size="20px" />
      <a 
        href={"https://www.google.com/maps/search/?api=1&query=" + address}
        className="ms-3 text-dark text-muted"
        target="_blank"
        rel="noreferrer"
      >
        {address}
      </a>
    </div>

    </>
  )
}

export default PlaceTitleAddress