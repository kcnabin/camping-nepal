import axios from "axios"
import { useEffect, useState } from "react"
import { getBaseUrl } from "../../helper/getBaseUrl"
import { getImgSrc } from "../../helper/getImgSrc"
import { Link } from "react-router-dom"

const IndexPage = () => {
  const [allPlaces, setAllPlaces] = useState([])
  const indexClass = `col-12 col-sm-6 col-md-4 p-0 py-1 px-3 mb-2 text-dark text-decoration-none`

  useEffect(() => {
    const fetchAllPlaces = async () => {
      const url = getBaseUrl() + '/places/all'
      const {data} = await axios.get(url)
      setAllPlaces(data)
    }
    fetchAllPlaces()
  }, [])

  return (
    <div>
      <div className=" rounded-3">
        <div className="row">
          
            {
              allPlaces.map((place, i) => {
                return (
                  <Link to={`/places/${place._id}`} className={indexClass} key={place._id}>
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
                  </Link>
                )
              })
            }
          
        </div>
      </div>
    </div>
  )
}

export default IndexPage