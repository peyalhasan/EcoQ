import NoLocationInfo from '@/components/NoLocationInfo';
import WeateherComponent from '@/components/WeateherComponent'
import { getResolvedLatLong } from '@/lib/locationInfo';
import React from 'react'

async function WeateherPage({ params: { location }, searchParams: { latitude, longitude } }) {
   const resolved = await getResolvedLatLong(location, latitude, longitude);

  if (resolved?.lat && resolved.lon) {
    return <WeateherComponent lat={resolved?.lat} lon={resolved?.lon} />
  } else {
    return <NoLocationInfo  location={location}/>
  }
}

export default WeateherPage