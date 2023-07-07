import { Link } from 'react-router-dom'
import IconText from '../../iconText/IconText'
import ProfileIcon from '../../../svg-icons/ProfileIcon'
import PenIcon from '../../../svg-icons/PenIcon'

const LoginDropdown = () => {

  return (
    <div className='overflow-hidden'>
      <Link to='/login' className='dropdown-options align-center'>
        <IconText text='Login'>
          <ProfileIcon size='20px' />
        </IconText>
      </Link>

      <Link to='/signup' className='dropdown-options align-center'>
        <IconText text='Register'>
          <PenIcon size="20px" />
        </IconText>
      </Link>
    </div>

  )
}

export default LoginDropdown