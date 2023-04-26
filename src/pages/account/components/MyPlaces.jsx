import { useState, useEffect } from "react"
import AddIcon from "../../../svg-icons/AddIcon"
import AddPlaceForm from "./places/AddPlaceForm"
import axios from "axios"
import { getBaseUrl } from "../../../helper/getBaseUrl"
import { getTokenHeader } from "../../../helper/getTokenHeader"


const MyPlaces = () => {
  const [pageForm, setPageForm] = useState(false)
  const [myPlaces, setMyPlaces] = useState([])

  useEffect(() => {
    const fetchMyPlaces = async () => {
      const placeUrl = getBaseUrl() + '/places'
      const {data} = await axios.get(placeUrl, getTokenHeader())
      setMyPlaces(data)
    }
    fetchMyPlaces()
  }, [])

  if (!pageForm) {
    return (
      <div>
        <div
          onClick={() => setPageForm(true)}
          className="d-flex justify-content-center flex-grow-1 btn p-0"
        >
          <div className="d-flex align-items-center bg-success text-white p-2 rounded-2">
            <AddIcon />
            <span className="ms-2">
              Add Camp
            </span>
          </div>
        </div>

        <ul>
          {
            myPlaces.map(place => {
              return (
                <li key={place._id}>
                  {place.name}
                </li>
              )
            })
          }
        </ul>

      </div>
    )
  }

  return (
    <AddPlaceForm 
      setPageForm={setPageForm} 
      setMyPlaces={setMyPlaces}
      myPlaces={myPlaces}
    />
  )
}

export default MyPlaces