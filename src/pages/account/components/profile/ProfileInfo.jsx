import React, { useState } from 'react'
import PasswordChangeForm from './PasswordChangeForm'

const ProfileInfo = ({ user, setEditProfile }) => {
  const [passwordPage, setPasswordPage] = useState(false)

  if (passwordPage) {
    return (<PasswordChangeForm setPasswordPage={setPasswordPage} email={user.email} />)
  }

  return (
    <div>
      <h4 className="text-center">
        Profile
      </h4>

      <div className="mt-3">
        <div className='mb-3'>
          <span className='h5 me-2'>Full Name:</span>
          <span className='h5 text-primary'>{user?.name}</span>
        </div>

        <div className='mb-3'>
          <span className='h5 me-2'>Email:</span>
          <span className='h5 text-primary'>{user?.email}</span>
        </div>

        <div className='mb-3'>
          <span className='h5 me-2'>Contact Number:</span>
          <span className='h5 text-primary'>{user?.phoneNum}</span>
        </div>

        <div className='mb-3'>
          <span className='h5 me-2'>Address:</span>
          <span className='h5 text-primary'>
            {
              user?.address?.street
                ? `${user?.address?.street}, ${user?.address?.city}`
                : ''
            }
          </span>
        </div>


      </div>

      <div>
        <button className="btn btn-secondary me-2 mt-1" onClick={() => setEditProfile(true)}>
          Update Profile
        </button>

        <button className="btn btn-primary mt-1" onClick={() => setPasswordPage(true)}>
          Change Password
        </button>
      </div>
    </div>
  )
}

export default ProfileInfo