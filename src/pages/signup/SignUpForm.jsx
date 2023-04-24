import { useState } from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { getBaseUrl } from "../../helper/getBaseUrl"

const SignUpForm = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [newUserCreated, setNewUserCreated] = useState(false)

  const navigate = useNavigate()
  const clearForm = () => {
    setFullName('')
    setEmail('')
    setPassword('')
    setNewUserCreated(false)
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

      setNewUserCreated(true)
      setTimeout(() => {
        clearForm()
        navigate('/login')
      }, 4000)
      
    } catch (e) {
      alert(e.response.data.err)
      console.log(e.response.data.err)
    }
  }

  return (
    <>
    {
      newUserCreated ? (
        <div className="mb-3 text-muted">
          New User created. Redirecting to login...
        </div>
      ) : ''
    }
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