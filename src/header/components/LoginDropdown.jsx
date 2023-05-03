import { Link } from 'react-router-dom'

const LoginDropdown = () => {
  const style = `text-decoration-none p-2 text-dark text-center fw-bold`
  return (
    <div className='d-flex flex-column py-1'>
      <Link to='/login' className={style}>
        Login
      </Link>

      <Link to='/signup' className={style}>
        Signup
      </Link>
    </div>
    
  )
}

export default LoginDropdown