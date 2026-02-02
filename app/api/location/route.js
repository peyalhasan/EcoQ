import { getLocations } from "./locaton-utils"


export async function GET() {
    const locationData = getLocations()
    return Response.json(locationData)
}