import LocationIcon from "../../../svg-icons/LocationIcon"

const PlaceTitleAddress = ({name, address}) => {
  return (
    <>
    <div>
      <h3>
        {name}
      </h3>
    </div>

    <div className="mt-2">
      <span>
        <LocationIcon />
        <a 
          href={"https://www.google.com/maps/search/?api=1&query=" + address}
          className="ms-2 text-dark text-muted"
          target="_blank"
          rel="noreferrer"
        >
          {address}
        </a>
      </span>
    </div>
    </>
  )
}

export default PlaceTitleAddress