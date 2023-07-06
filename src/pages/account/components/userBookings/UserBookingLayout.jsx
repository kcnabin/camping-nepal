import React from 'react'
import DashboardLayout from '../../../../components/DashboardLayout'
import UserMenu from '../../UserMenu'
import UserBookings from './UserBooking'

const UserBookingLayout = () => {
  return (
    <DashboardLayout
      left={<UserMenu />}
      right={<UserBookings />}
    />
  )
}

export default UserBookingLayout