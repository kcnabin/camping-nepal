import { Link } from "react-router-dom"
import LoginForm from "./LoginForm"
import Page100Vh from "../../components/Page100Vh"

const LoginPage = () => {

  return (
    <Page100Vh>
      <div className="card p-4 shadow rounded-4 mx-4">
        <p className="h4 text-center">
          Login
        </p>

        <div className="my-5">
          <LoginForm />
        </div>

        <div className="d-flex flex-wrap align-items-center">
          <span className="fw-bold me-2">
            Don't have an account ?
          </span>

          <Link
            to='/signup'
            className="py-1 text-primary fw-bold"
          >
            Register
          </Link>
        </div>
      </div>
    </Page100Vh>
  )
}

export default LoginPage