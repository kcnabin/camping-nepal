import { getBaseUrl } from "../../helper/getBaseUrl"
import { Link } from "react-router-dom"
import EachPlace from "./components/EachPlace"
import { useFetchData } from "../../customHooks/useFetchData"

const IndexPage = () => {
  const indexClass = `col-12 col-sm-6 col-lg-4 p-0 px-sm-3 my-2 text-dark text-decoration-none`

  const allPlacesUrl = getBaseUrl() + '/places/all'
  const {value: allPlaces} = useFetchData(allPlacesUrl)

  if (!(allPlaces.length <= 0)) {
    return (
      <div className="container overflow-hidden">
        <div className="row mt-3">
        {
          allPlaces.map(place => {
            return (
              <Link to={`/places/${place._id}`} className={indexClass} key={place._id}>
                <EachPlace place={place} />
              </Link>
            )
          })
        }
        </div>
      </div>
    )
  }
  
  return <h1>No Places Fetched!</h1>
}

export default IndexPage