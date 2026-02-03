import AQIComponent from '@/components/AQIComponent'
import React from 'react'

export default function AQIPage({ params: { location }, searchParams: { latitude, longitude } }) {

  return <AQIComponent lat={latitude} lon={longitude} />
}
