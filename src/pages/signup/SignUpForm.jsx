import { useContext, useState } from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { getBaseUrl } from "../../helper/getBaseUrl"
import { DisplayInfoContext } from "../../context/DisplayInfoContext"

const SignUpForm = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const { setInfo } = useContext(DisplayInfoContext)

  const clearForm = () => {
    setFullName('')
    setEmail('')
    setPassword('')
  }

  const signupUser = async e => {
    e.preventDefault()

    const signupUrl = getBaseUrl() + '/signup'
    const userObject = {
      fullName,
      email,
      password
    }

    try {
      await axios.post(signupUrl, userObject)
      clearForm()
      setInfo('New User created. Redirecting to login...')

      setTimeout(() => {
        setInfo('')
        navigate('/login')
      }, 4000)
      
    } catch (e) {
      setInfo(e.response.data.err)
      setTimeout(() => setInfo(''), 3000)
    }
  }

  return (
    <>
    <form onSubmit={signupUser}>
      
      <div className="mb-3">
        <label htmlFor="fullname" className="form-label">
          Full Name
        </label>
        <input 
          type="text"
          className="form-control"
          id="fullname"
          value={fullName}
          onChange={e => setFullName(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input 
          type="email"
          className="form-control"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input 
          type="password"
          className="form-control"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary"
      >
        Signup
      </button>
    </form>
    </>
  )
}

export default SignUpForm