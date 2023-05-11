import { Link } from "react-router-dom"
import SignUpForm from "./SignUpForm"

const SignupPage = () => {
  return (
    <div className="d-flex body-height">
      <div className="flex-grow-1 d-flex justify-content-center align-items-center">
        <div>
          <p className="h4 text-center">
            Sign Up
          </p>

          <SignUpForm />

          <div className="mt-4 d-sm-flex align-items-center">
            <span className="fw-bold">
              Already have an account ?
            </span>

            <Link 
              to='/login'
              className="btn btn-success py-1 ms-2"
            >
              Login
            </Link> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupPage