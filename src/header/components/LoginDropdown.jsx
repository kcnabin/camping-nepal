import { Link } from 'react-router-dom'

const LoginDropdown = () => {
  return (
    <Link to='/login' className='text-decoration-none p-4 text-dark fw-bold'>
      Login
    </Link>
  )
}

export default LoginDropdown