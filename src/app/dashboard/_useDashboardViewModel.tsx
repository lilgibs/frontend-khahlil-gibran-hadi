import React from 'react'
import useUserGenderOverview from './hooks/_useUserGenderOverview'
import useUserLocationTypeOverview from './hooks/_useLocationTypeOverview'
import useUserBrandDeviceOverview from './hooks/_useUserBrandDeviceOverview'
import useUserDigitalInterestOverview from './hooks/_useUserDigitalInterestOverview'

export default function useDashboardViewModel() {
  const genderOverview = useUserGenderOverview()
  const locationTypeOverview = useUserLocationTypeOverview()
  const brandDeviceOverview = useUserBrandDeviceOverview()
  const digitalInterestOverview = useUserDigitalInterestOverview()

  return {
    genderOverview,
    locationTypeOverview,
    brandDeviceOverview,
    digitalInterestOverview
  }
}
