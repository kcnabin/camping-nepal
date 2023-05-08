import axios from "axios"
import { useContext, useState } from "react"
import { getBaseUrl } from "../../../../helper/getBaseUrl"
import { handleError } from "../../../../helper/handleError"
import { DisplayInfoContext } from "../../../../context/DisplayInfoContext"

const AddPhotosByLink = ({ photos, setPhotos }) => {
  const [link, setLink]  = useState('')
  const {setInfo} = useContext(DisplayInfoContext)

  const addPhotos = async () => {
    const uploadUrl = getBaseUrl() + '/uploadPhoto'
    try {
      const {data} = await axios.post(uploadUrl, {link})
      setPhotos([...photos, data.filename])
      setLink('')

    } catch (e) {
      handleError(e, setInfo)
    }
  }

  return (
    <>
      <span>Upload Photos By Link</span>
      <div className="d-flex">
        <input 
          type="text"
          value={link}
          onChange={e => setLink(e.target.value)}
          className="form-control my-2"
          placeholder="Add link to image here"
        />
        
        <button 
          className="btn btn-secondary p-0"
          type="button"
          onClick={addPhotos}

        >
          Add Photos
        </button>
      </div>
    </>
  )
}

export default AddPhotosByLink