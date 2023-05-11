import { useState } from "react"
import AddPlaceForm from "./components/places/AddPlaceForm"
import { getBaseUrl } from "../../helper/getBaseUrl"
import { useFetchData } from "../../customHooks/useFetchData"
import AddNewPlaceButton from "./components/places/AddNewPlaceButton"
import DisplayEachPlace from "./components/places/DisplayEachPlace"

const MyPlaces = () => {
  const [pageForm, setPageForm] = useState(false)
  const placeUrl = getBaseUrl() + '/places'
  const {value: myPlaces, setValue: setMyPlaces} = useFetchData(placeUrl, '')

  if (!pageForm) {

    if (!(myPlaces.length <= 0)) {
      return (
        <div>
          <AddNewPlaceButton 
            setPageForm={setPageForm}
          />

          <div className="container-fluid">
            <div className="row">
              {
                myPlaces.map((place, i) => {
                  return (
                    <DisplayEachPlace 
                      place={place} 
                      myPlaces={myPlaces} 
                      setMyPlaces={setMyPlaces} 
                      key={i} 
                    />
                  )
                })
              }
            </div>
          </div>

        </div>
      )
    }
    
    return ''
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