import React from 'react'
import { Link } from 'react-router-dom'
import { getImgSrc } from '../../../helper/getImgSrc'

const PlaceCarousel = ({ allPlaces }) => {
  const carouselTextStyle = `carousel-text position-absolute start-0 end-0 bottom-0 p-2 p-sm-3 p-md-4 text-center h3 mb-0 `

  return (
    <div className="ratio ratio-16x9 overflow-hidden h-max-100vh">
      <div
        id="placesCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner" style={{ height: "100%" }}>
          <Link
            to={`/places/${allPlaces[1]._id}`}
            className="carousel-item active position-relative"
            style={{ height: "100%" }}

          >
            <img
              src={getImgSrc(allPlaces[1].photos[1])}
              className="d-block w-100 object-fit-cover"
              alt="..."
              style={{ height: "100%" }}
            />
            <div className={carouselTextStyle}>
              {`${allPlaces[1].name} - ${allPlaces[1].address}`}
            </div>

          </Link>

          {
            allPlaces.map(place => (
              <Link
                to={`/places/${place._id}`}
                key={place._id}
                className="carousel-item position-relative"
                style={{ height: "100%" }}
              >
                <img
                  src={getImgSrc(place.photos[0])}
                  className="d-block w-100 object-fit-cover"
                  alt="..."
                  style={{ height: "100%" }}
                />

                <div className={carouselTextStyle}>
                  {`${place.name} - ${place.address}`}
                </div>
              </Link>
            ))
          }
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#placesCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>

        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#placesCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>


    </div>
  )
}

export default PlaceCarousel