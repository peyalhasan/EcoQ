import { NextResponse } from 'next/server';
import { getLocationByName } from '../locaton-utils'

export function GET(request, { params }) {
    const name = params?.name
    const locationData = getLocationByName(name);
    return NextResponse.json(locationData)
}
