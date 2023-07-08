import { Link } from "react-router-dom"
import Page100Vh from "../../components/Page100Vh"

const NotFound = () => {
  return (
    <Page100Vh>
      <div>

        <span>
          Got Lost?
        </span>
        <Link to='/' className="btn btn-secondary ms-2">
          Home Page
        </Link>
      </div>
    </Page100Vh>

  )
}

export default NotFound