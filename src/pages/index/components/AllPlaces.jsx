import React from 'react'
import { Link } from 'react-router-dom'
import EachPlace from './EachPlace'

const AllPlaces = ({ allPlaces }) => {
  const indexClass = `col-6 col-sm-6 col-md-4 col-lg-3 px-2`

  return (
    <div className="container-fluid">
      <h4 className="m-0 mt-2">
        Browse Camps
      </h4>
      <div className="row my-2">
        {
          allPlaces.map(place => {
            return (
              <Link
                to={`/places/${place._id}`}
                className={indexClass}
                key={place._id}
              >
                <EachPlace place={place} />
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default AllPlaces