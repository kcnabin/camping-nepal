import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import UserMenu from './UserMenu'
import Profile from './components/profile/UserProfile'

const UserDashboard = () => {
  return (
    <DashboardLayout
      left={<UserMenu />}
      right={<Profile />}
    />
  )
}

export default UserDashboard