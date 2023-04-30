

const BookingForm = ({place}) => {
  return (
    <div className="ms-md-5 shadow py-3 px-4">
      <div className="">
        <span className="fs-5 fw-semibold">NRs {place.price}</span> / night
      </div>

      <div className="d-flex flex-wrap gap-3 mt-3">
        <div className="flex-grow-1">
          <span>
            Check In
          </span>
          <input
            type="date"
            className="form-control border border-secondary mt-2 w-100"
          />
        </div>

        <div className="flex-grow-1">
          <span>
            Check Out
          </span>
          <input
            type="date"
            className="form-control border border-secondary mt-2 w-100"
          />
        </div>
      </div>

      <div className="mt-3">
        <span>
          Number of people
        </span>
        <input
          type="number"
          className="form-control border border-secondary mt-2"
        />
      </div>

      <div className="mt-3">
        <span>
          Name
        </span>
        <input
          type="text"
          className="form-control border border-secondary mt-2"
        />
      </div>

      <div className="mt-3">
        <span>
          Contact Number
        </span>
        <div>
          <input
            type="text"
            className="form-control border border-secondary mt-2"
          />
        </div>
      </div>

      <div className=" fw-bold">
        <div className="mt-3">
          Total Nights
        </div>
        <div className="mt-3">
          Total Amount
        </div>
      </div>

      <div className="mt-3">
        <button className="btn btn-success">
          Reserve Place
        </button>
      </div>
    </div>
  )
}

export default BookingForm