import { useContext, useState } from "react"
import axios from 'axios'
import { getBaseUrl } from "../../helper/getBaseUrl"
import { UserContext } from "../../context/UserContext"
import { useNavigate } from "react-router-dom"

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const userContext = useContext(UserContext)
  const navigate = useNavigate()

  const handleLogin = async e => {
    e.preventDefault()

    const loginUrl = getBaseUrl() + '/login'
    const userObject = {
      email,
      password
    }

    try {
      const {data} = await axios.post(loginUrl, userObject)
      localStorage.setItem('camper', JSON.stringify(data))
      userContext.setUser(data)

      setEmail('')
      setPassword('')
      navigate('/')


    } catch (e) {
      console.log(e.response.data.err)
      alert(e.response.data.err)
    }
  }

  return (
    <form onSubmit={handleLogin}>   
      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Email
        </label>
        <input 
          type="text"
          className="form-control"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="" className="form-label">
          Password
        </label>
        <input 
          type="password"
          className="form-control"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </div>

      <button
        type="submit"
        className="btn btn-success"
      >
        Login
      </button>
    </form>
  )
}

export default LoginForm