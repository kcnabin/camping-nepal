import { useContext, useEffect, useState } from "react"
import axios from 'axios'
import { getTokenHeader } from "../helper/getTokenHeader"
import { handleError } from "../helper/handleError"
import { DisplayInfoContext } from "../context/DisplayInfoContext"


export const useFetchData = (url, dependency) => {
  const [value, setValue] = useState('')
  const { setInfo } = useContext(DisplayInfoContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data} = await axios.get(url, getTokenHeader())
        setValue(data)

      } catch (error) {
        handleError(error, setInfo)
      }
    }

    fetchData()

  }, [dependency, url, setInfo])

  return {value, setValue}
}