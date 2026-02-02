'use client'
import { useState, useEffect, useRef } from "react"
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import Image from "next/image";


function LocationDetactor() {

    const [loading, setLoading] = useState(false);
    const pathName = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();
    const detectRef = useRef(false);



    useEffect(() => {
        // If location is already detected or in process, do nothing

        const hasLocation = searchParams.get('latitude') && searchParams.get("longitude");

        if (detectRef.current || hasLocation) return

        detectRef.current = true;

        const fallbackLocation = () => [
            router.push('/dhaka')
        ]

        // Get url parameter 
        const params = new URLSearchParams(searchParams);

        // Check if geolocation support browser

        if (navigator.geolocation) {
            //Find current location
            navigator.geolocation.getCurrentPosition((postiton) => {
                params.set('latitude', postiton.coords.latitude);
                params.set('longitude', postiton.coords.longitude);
                setLoading(false)

                // Latitude and longitude diye current er data tole anbo 
                router.push(`/current?${params.toString()}`)
            },
                (error) => {
                    fallbackLocation()
                    console.log(error.message)
                })
        }
        else {
            fallbackLocation()
        }
    }, [pathName, searchParams])

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-slate-700 text-white">
            <Image src='/network.gif' alt="Loading..." height={500} width={500} className="border rounded-md my-4" />
            <p>Detecting Location...</p>
        </div>
    )
}

export default LocationDetactor