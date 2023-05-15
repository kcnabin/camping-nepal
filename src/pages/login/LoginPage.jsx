import { Link } from "react-router-dom"
import LoginForm from "./LoginForm"
import MinHeight100Vh from "../../components/MinHeight100Vh"

const LoginPage = () => {
  return (
    <MinHeight100Vh>
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
    </MinHeight100Vh>
  )
}

export default LoginPage