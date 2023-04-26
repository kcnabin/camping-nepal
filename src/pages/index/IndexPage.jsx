import axios from "axios"
import { useEffect, useState } from "react"
import { getBaseUrl } from "../../helper/getBaseUrl"

const IndexPage = () => {
  const [allPlaces, setAllPlaces] = useState([])

  useEffect(() => {
    const fetchAllPlaces = async () => {
      const url = getBaseUrl() + '/places/all'
      const {data} = await axios.get(url)
      setAllPlaces(data)
    }
    fetchAllPlaces()
  }, [])

  return (
    <div className="bg-danger text-white">
      IndexPage
    </div>
  )
}

export default IndexPage