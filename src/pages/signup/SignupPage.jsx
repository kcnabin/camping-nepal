import { Link } from "react-router-dom"
import SignUpForm from "./SignUpForm"
import MinHeight100Vh from "../../components/MinHeight100Vh"
import Page100Vh from "../../components/Page100Vh"

const SignupPage = () => {
  return (
    <>
      {/* <MinHeight100Vh>
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
      </MinHeight100Vh> */}

      <Page100Vh>
        <div className="card p-4 shadow rounded-4 mx-4">
          <p className="h4 text-center">
            Register
          </p>

          <div className="my-3">
            <SignUpForm />
          </div>

          <div className="d-flex flex-wrap align-items-center">
            <span className="fw-bold me-2">
              Already have an account ?
            </span>

            <Link
              to='/login'
              className="py-1 text-success fw-bold"
            >
              Login
            </Link>
          </div>
        </div>
      </Page100Vh>
    </>

  )
}

export default SignupPage