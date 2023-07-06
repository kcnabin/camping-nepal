import React from 'react'
import DashboardLayout from '../../../../components/DashboardLayout'
import UserMenu from '../../UserMenu'
import UserProfile from './UserProfile'

const ProfileLayout = () => {
  return (
    <DashboardLayout
      left={<UserMenu />}
      right={<UserProfile />}
    />
  )
}

export default ProfileLayout