import axios from "axios"
import { useEffect, useState } from "react"
import { getBaseUrl } from "../../helper/getBaseUrl"
import { getImgSrc } from "../../helper/getImgSrc"
import { Link, useNavigate } from "react-router-dom"
import { getTokenHeader } from "../../helper/getTokenHeader"
import EachPlace from "./EachPlace"

const IndexPage = () => {
  const [allPlaces, setAllPlaces] = useState([])
  const indexClass = `col-12 col-sm-6 col-md-4 p-0 py-1 px-sm-3 mb-2 text-dark text-decoration-none overflow-hidden`

  const user = JSON.parse(localStorage.getItem('camper'))
  const navigate = useNavigate()

  useEffect(() => {
    const fetchAllPlaces = async () => {
      const url = getBaseUrl() + '/places/all'
      const {data} = await axios.get(url, getTokenHeader())
      setAllPlaces(data)
    }
    
    if (!user) {
      navigate('/login')
    } else {
      fetchAllPlaces()
    }
  }, [navigate, user])

  return (
    <div>
      <div className="container">
        <div className="row mt-3">
        {
          allPlaces.map((place, i) => {
            return (
              <Link to={`/places/${place._id}`} className={indexClass} key={place._id}>
                <EachPlace place={place} />
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