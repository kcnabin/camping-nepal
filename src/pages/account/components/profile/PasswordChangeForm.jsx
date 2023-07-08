import { toast } from 'react-toastify'
import HideIcon from '../../../../svg-icons/HideIcon'
import VisibleIcon from '../../../../svg-icons/VisibleIcon'
import { handleError } from '../../../../helper/handleError'
import { useState } from 'react'
import axios from 'axios'
import { getTokenHeader } from '../../../../helper/getTokenHeader'

const PasswordChangeForm = ({ setPasswordPage, email }) => {
  const [currentPassword, setCurrentPassword] = useState('')
  const [showCurrent, setShowCurrent] = useState(false)
  const [newPassword, setNewPassword] = useState('')
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [repeatPass, setRepeatPass] = useState('')
  const [showRepeatPass, setShowRepeatPass] = useState(false)

  const clearForm = () => {
    setCurrentPassword('')
    setNewPassword('')
    setRepeatPass('')
  }

  const handlePasswordChange = async (e) => {
    e.preventDefault()

    if (!currentPassword || !newPassword || !repeatPass) {
      return toast.error('All fields must be filled!')
    }

    if (newPassword !== repeatPass) {
      return toast.error(`New password don't match!`)
    }

    const passwordObject = {
      password: currentPassword,
      newPassword
    }

    try {
      await axios.put('/change-password', passwordObject, getTokenHeader())
      toast.success('Password changed successfully!')
      clearForm()
      setPasswordPage(false)

    } catch (error) {
      return handleError(error)
    }
  }

  return (
    <div>
      <h4 className="text-center">
        Change Password
      </h4>

      <form className='my-4' onSubmit={handlePasswordChange}>
        <div className="mb-4">
          <label className='form-label h6'>
            Email
          </label>
          <input
            type='text'
            value={email}
            className='form-control'
            disabled
          />
        </div>

        <div>
          <label className='form-label h6'>
            Current Password
          </label>
          <div className="input-group mb-4">
            <input
              type={showCurrent ? 'text' : 'password'}
              value={currentPassword}
              onChange={e => setCurrentPassword(e.target.value)}
              className='form-control'
              placeholder='Current Password'
            />
            <span className="input-group-text">
              <button
                className="btn p-0 m-0"
                type='button'
                onClick={() => setShowCurrent(!showCurrent)}
              >
                {showCurrent ? <HideIcon /> : <VisibleIcon />}
              </button>
            </span>
          </div>
        </div>

        <div>
          <label className='form-label h6'>
            New Password
          </label>
          <div className="input-group mb-4">
            <input
              type={showNewPassword ? 'text' : 'password'}
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
              className='form-control'
              placeholder='New Password'
            />
            <span className="input-group-text">
              <button
                className="btn p-0 m-0"
                type='button'
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? <HideIcon /> : <VisibleIcon />}
              </button>
            </span>
          </div>
        </div>

        <div>
          <label className='form-label h6'>
            Repeat New Password
          </label>
          <div className="input-group mb-4">
            <input
              type={showRepeatPass ? 'text' : 'password'}
              value={repeatPass}
              onChange={e => setRepeatPass(e.target.value)}
              className='form-control'
              placeholder='Repat New Password'
            />
            <span className="input-group-text">
              <button
                className="btn p-0 m-0"
                type='button'
                onClick={() => setShowRepeatPass(!showRepeatPass)}
              >
                {showRepeatPass ? <HideIcon /> : <VisibleIcon />}
              </button>
            </span>
          </div>
        </div>

        <div className='mb-3'>
          {
            (newPassword === repeatPass)
              ? ''
              : (
                <span className='text-danger'>
                  New password don't match!
                </span>
              )
          }
        </div>

        <div>
          <button
            className="btn btn-success"
            type='submit'
          >
            Change Password
          </button>

          <button
            className="btn btn-danger ms-2"
            type='button'
            onClick={() => setPasswordPage(false)}
          >
            Cancel
          </button>
        </div>

      </form>
    </div>
  )
}

export default PasswordChangeForm