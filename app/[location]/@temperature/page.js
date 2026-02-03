import TemperatureComponent from '@/components/TemperatureComponent'
import React from 'react'

function TemperaturePage({ params: { location }, searchParams: { latitude, longitude } }) {
  return (
    <TemperatureComponent lat={latitude} lon={longitude} />
  )
}

export default TemperaturePage