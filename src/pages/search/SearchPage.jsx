import React, { useEffect, useState } from 'react'
import LoadingIcon from '../../svg-icons/LoadingIcon'
import AllPlaces from '../index/components/AllPlaces'
import { useSearch } from '../../context/SearchContext'
import { handleError } from '../../helper/handleError'
import axios from 'axios'

const SearchPage = () => {
  const [camps, setCamps] = useState('')
  const { search } = useSearch()


  useEffect(() => {
    const searchCamp = async () => {
      const searchText = search.replace(' ', '+')

      try {
        const { data } = await axios.get(`/search/${searchText}`)
        setCamps(data)
      } catch (error) {
        return handleError(error)
      }
    }

    if (search) {
      searchCamp()
    }
  }, [search])

  if (camps) {
    return (
      <div className='mx-2 mx-md-3 my-2'>
        <div className='p-2 ms-1 mb-1 pb-0'>
          <span>Your Search: {`'${search}'`}</span>
          <span className="ms-2 h5">({camps.length} Camps found)</span>
        </div>

        {
          (camps.length > 0)
            ? <AllPlaces allPlaces={camps} />
            : ''
        }

      </div>
    )
  }

  return <LoadingIcon />
}

export default SearchPage