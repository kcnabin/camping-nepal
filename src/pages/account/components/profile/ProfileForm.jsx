import React, { useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { handleError } from '../../../../helper/handleError';
import { getTokenHeader } from '../../../../helper/getTokenHeader';

const ProfileForm = ({ user, setUser, setEditProfile }) => {
  const [name, setName] = useState(user.name)
  const [phoneNum, setPhoneNum] = useState(user?.phoneNum || '')
  const [street, setStreet] = useState(user?.address?.street || '')
  const [city, setCity] = useState(user?.address?.city || '')

  const updateProfile = async (e) => {
    e.preventDefault()

    // if (!window.confirm('Want to update profile?')) {
    //   return
    // }

    const profileObject = {
      name,
      phoneNum,
      address: {
        street,
        city
      }
    }

    try {
      await axios.put('/user-info/update', profileObject, getTokenHeader())
      toast.success('Updated SucessFully!')
      setUser({ ...user, ...profileObject })
      setEditProfile(false)

    } catch (error) {
      return handleError(error)
    }
  }

  return (
    <form onSubmit={updateProfile}>
      <h4 className="text-center">
        Update Profile
      </h4>

      <div className="mb-3">
        <label className='form-label h6'>
          Email
        </label>
        <input
          type='text'
          value={user.email}
          className='form-control'
          placeholder='Full Name'
          disabled
        />
      </div>

      <div className="mb-3">
        <label className='form-label h6'>
          User Name
        </label>
        <input
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
          className='form-control'
          placeholder='Full Name'
        />
      </div>

      <div className="mb-3">
        <label className='form-label h6'>
          Phone Number
        </label>
        <input
          type='text'
          value={phoneNum}
          onChange={e => setPhoneNum(e.target.value)}
          className='form-control'
          placeholder='Contact Number'
        />
      </div>

      <div className="d-flex flex-column flex-sm-row gap-sm-4">
        <div className="mb-3 flex-grow-1">
          <label className='form-label h6'>
            Street Address
          </label>
          <input
            type='text'
            value={street}
            onChange={e => setStreet(e.target.value)}
            className='form-control'
            placeholder='Street Name'
          />
        </div>

        <div className="mb-3 flex-grow-1">
          <label className='form-label h6'>
            City
          </label>
          <input
            type='text'
            value={city}
            onChange={e => setCity(e.target.value)}
            className='form-control'
            placeholder='City Name'
          />
        </div>
      </div>

      <div>
        <button
          className="btn btn-success"
          type='submit'
        >
          Update
        </button>

        <button
          className="btn btn-secondary ms-2"
          type='button'
          onClick={() => setEditProfile(false)}
        >
          Cancel
        </button>
      </div>

    </form>
  )
}

export default ProfileForm