import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { getBaseUrl } from "../../helper/getBaseUrl"
import { Link, useNavigate } from "react-router-dom"
import { getTokenHeader } from "../../helper/getTokenHeader"
import EachPlace from "./EachPlace"
import { DisplayInfoContext } from "../../context/DisplayInfoContext"
import { handleError } from "../../helper/handleError"

const IndexPage = () => {
  const [allPlaces, setAllPlaces] = useState([])
  const indexClass = `col-12 col-sm-6 col-lg-4 p-0 px-sm-3 my-2 text-dark text-decoration-none`
  const {setInfo} = useContext(DisplayInfoContext)

  const navigate = useNavigate()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('camper'))
    
    const fetchAllPlaces = async () => {
      const url = getBaseUrl() + '/places/all'
      try {
        const {data} = await axios.get(url, getTokenHeader())
        setAllPlaces(data)
        
      } catch (e) {
        handleError(e, setInfo)
      }
    }
    
    if (!user) {
      navigate('/login')

    } else {
        fetchAllPlaces()
    }
  }, [navigate])

  return (
    <div className="container overflow-hidden">
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
  )
}

export default IndexPage