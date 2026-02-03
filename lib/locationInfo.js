

export const getLocationData = async (lat, lon) => {
    try {
        const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}`);

        const data = await response.json();
        return data;
    } catch (e) {
        console.error(e.message)
    }
}


const baseURL = process.env.NEXT_PUBLIC_API_URL || ''
export const getLocationLongList = async () => {
    try {
        const response = await fetch(`${baseURL}/api/location`)
        const data = await response.json();
        return data;
    } catch (e) {
        console.error(e)
    }
}
export const getLocationLong = async (locationName) => {
    try {
        const response = await fetch(`${baseURL}/api/location/${locationName}`)
        const data = await response.json();
        return data;
    } catch (e) {
        console.error(e)
    }
}

export const getResolvedLatLong = async (location, lat, lon) => {
    if (lat && lon) {
        return { lat, lon }
    }
    const locationLatLong = await getLocationLong(location);

    if (locationLatLong.latitude && locationLatLong.longitude) {
        const lat = locationLatLong.latitude;
        const lon = locationLatLong.longitude
        return { lat, lon }
    }
}