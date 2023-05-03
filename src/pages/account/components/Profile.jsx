import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../../context/UserContext"


const Profile = () => {
  const navigate = useNavigate()
  const userContext = useContext(UserContext)

  const logoutUser = () => {
    localStorage.removeItem('camper')
    userContext.setUser(null)
    navigate('/login')
  }

  return (
    <div className="my-2 px-2">
      <p>My Profile</p>
      <button 
        onClick={logoutUser}
        className="btn btn-danger"
      >
        Log Out
      </button>
    </div>
  )
}

export default Profile