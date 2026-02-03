import NoLocationInfo from '@/components/NoLocationInfo';
import WindComponent from '@/components/WindComponent'
import { getResolvedLatLong } from '@/lib/locationInfo';
import React from 'react'

async function WindPage({ params: { location }, searchParams: { latitude, longitude } }) {
  const resolved = await getResolvedLatLong(location, latitude, longitude);

  if (resolved?.lat && resolved.lon) {
    return <WindComponent lat={resolved?.lat} lon={resolved?.lon} />
  } else {
    return <NoLocationInfo location={location} />
  }
}

export default WindPage