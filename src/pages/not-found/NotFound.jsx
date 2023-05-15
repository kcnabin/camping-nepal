import { Link } from "react-router-dom"
import MinHeight100Vh from "../../components/MinHeight100Vh"


const NotFound = () => {
  return (
    <MinHeight100Vh>
      <div>
        <span>
          Got Lost?
          </span>
          <Link to='/' className="btn btn-secondary ms-2">
            Home Page
          </Link>
      </div>
    </MinHeight100Vh>
    
  )
}

export default NotFound