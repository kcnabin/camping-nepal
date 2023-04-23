import { Link } from "react-router-dom"

const LoginPage = () => {
  return (
    <div className="d-flex min-vh-100">
      <div className="flex-grow-1 d-flex justify-content-center align-items-center">
        <div>
          <p className=" h4 text-center">
            Login
          </p>

          <form>
            
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Email
              </label>
              <input 
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Password
              </label>
              <input 
                type="password"
                className="form-control"
              />
            </div>

            <button
              type="submit"
              className="btn btn-success"
            >
              Login
            </button>
          </form>

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