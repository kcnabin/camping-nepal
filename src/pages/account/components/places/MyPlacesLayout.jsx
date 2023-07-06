import React from 'react'
import DashboardLayout from '../../../../components/DashboardLayout'
import UserMenu from '../../UserMenu'
import MyPlaces from './MyPlaces'

const MyPlacesLayout = () => {
  return (
    <DashboardLayout
      left={<UserMenu />}
      right={<MyPlaces />}
    />
  )
}

export default MyPlacesLayout