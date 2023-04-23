import { Link } from "react-router-dom"


const NotFound = () => {
  return (
    <div className="d-flex min-vh-100">
      <div className="flex-grow-1 d-flex align-items-center justify-content-center">
        <span>
         Got Lost?
        </span>
        <Link to='/' className="btn btn-secondary ms-2">
          Home Page
        </Link>
      </div>
    </div>
  )
}

export default NotFound