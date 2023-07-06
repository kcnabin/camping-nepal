import React from 'react'
import DashboardLayout from '../../../../components/DashboardLayout'
import UserMenu from '../../UserMenu'
import MyBookings from './MyBooking'

const MyBookingLayout = () => {
  return (
    <DashboardLayout
      left={<UserMenu />}
      right={<MyBookings />}
    />
  )
}

export default MyBookingLayout