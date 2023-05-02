import { Link } from "react-router-dom"
import LoginForm from "./LoginForm"

const LoginPage = () => {
  return (
    <div className='d-flex body-height'>
      <div className='flex-grow-1 d-flex align-items-center justify-content-center'>
        <div>
          <p className="h4 text-center mb-4">
            Login
          </p>

          <LoginForm />

          <div className="mt-4 d-sm-flex align-items-center">
            <span className="fw-bold">
              Don't have an account ?
            </span>

            <Link
              to='/signup'
              className="btn btn-secondary py-1 ms-2"
            >
              Sign Up
            </Link> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage