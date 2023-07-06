import { useState } from "react"
import AddPlaceForm from "./components/AddPlaceForm"
import { useFetchData } from "../../../../customHooks/useFetchData"
import AddNewPlaceButton from "./AddNewPlaceButton"
import DisplayEachPlace from "./components/DisplayEachPlace"

const MyPlaces = () => {
  const [pageForm, setPageForm] = useState(false)
  const placeUrl = '/places'
  const { value: myPlaces, setValue: setMyPlaces } = useFetchData(placeUrl, '')

  if (!pageForm) {

    if (!(myPlaces.length <= 0)) {
      return (
        <>
          <AddNewPlaceButton
            setPageForm={setPageForm}
          />

          <div className="container-fluid mt-3">
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
        </>
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