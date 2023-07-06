import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "../../../../context/UserContext"

const UserProfile = () => {
  const navigate = useNavigate()
  const userContext = useContext(UserContext)

  const logoutUser = () => {
    localStorage.removeItem('camper')
    userContext.setUser(null)
    navigate('/login')
  }

  return (
    <div className="">
      <p className="h4">My Profile</p>
      <button
        onClick={logoutUser}
        className="btn btn-danger"
      >
        Log Out
      </button>
    </div>
  )
}

export default UserProfile