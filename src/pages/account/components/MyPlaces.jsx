import { useState } from "react"
import AddIcon from "../../../svg-icons/AddIcon"
import AddPlaceForm from "./places/AddPlaceForm"


const MyPlaces = () => {
  const [pageForm, setPageForm] = useState(false)

  if (!pageForm) {
    return (
      <div>
        <div
          onClick={() => setPageForm(true)}
          className="d-flex align-items-center btn p-0"
        >
          <div className="bg-success text-white p-2 rounded-2">
            <AddIcon />
            <span className="ms-2">
              Add Camp
            </span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <AddPlaceForm setPageForm={setPageForm}/>
  )
}

export default MyPlaces