import AddIcon from "../../../../svg-icons/AddIcon"

const AddNewPlaceButton = ({ setPageForm }) => {
  return (
    <div
      onClick={() => setPageForm(true)}
      className="btn p-0 d-flex justify-content-center flex-grow-1 text-center"
    >
      <div className="d-flex align-items-center bg-success text-white py-2 px-3 rounded-4 mt-2 mt-sm-0">
        <AddIcon />

        <span className="ms-2">
          Add New Camp
        </span>

      </div>
    </div>
  )
}

export default AddNewPlaceButton