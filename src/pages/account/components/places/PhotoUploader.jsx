import { getBaseUrl } from "../../../../helper/getBaseUrl"
import axios from 'axios'
import { handleError } from "../../../../helper/handleError"
import { useContext } from "react"
import { DisplayInfoContext } from "../../../../context/DisplayInfoContext"

const PhotoUploader = ({ photos, setPhotos }) => {
  const { setInfo } = useContext(DisplayInfoContext)

  const uploadFiles = async e => {
    const files = e.target.files
    const data = new FormData()

    for (let i=0; i<files.length; i++) {
      data.append('photos', files[i])
    }
    
    const uploadUrl = getBaseUrl() + '/upload-from-device'
    try {
      const res = await axios.post(uploadUrl, data, {
        headers: {'Content-type': 'multipart/form-data'}
      })
      setPhotos([...photos, ...res.data])

    } catch (e) {
      handleError(e, setInfo)
    }

  }

  return (
      <label className="btn border border-secondary mt-2 p-4">
        <input 
          type="file"
          className="d-none"
          multiple
          onChange={uploadFiles}
        />
        <span>
          Upload from device
        </span>
      </label>
  )
}

export default PhotoUploader