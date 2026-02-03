'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import { getLocationLongList } from "@/lib/locationInfo";
import Link from "next/link";


const LocaltionSwithcer = () => {
    const [showLocationList, setLocationList] = useState(false);
    const [locations, setLocations] = useState([])

    useEffect(() => {
        async function getLocationList() {
            const locationList = await getLocationLongList();
            setLocations(locationList)
        }
        getLocationList()
    }, [])

    return (
        <div className="relative">
            <button onClick={() => setLocationList((prev) => !prev)}>
                <Image
                    width={40}
                    height={40}
                    className="size-9"
                    src="/link.svg"
                    alt="link icon"
                />
            </button>
            {
                showLocationList &&
                (
                    <div
                        className="absolute left-0 top-12 z-[999] w-full min-w-[280px] rounded-md bg-white p-4 shadow max-md:-translate-x-1/2"
                    >
                        <ul
                            role="list"
                            className="divide-y divide-gray-100 [&>*]:py-2 [&>li] :cursor-pointer overflow-y-auto
                            max-h-60"
                        >
                            {
                                locations.map((info) => (
                                    <li key={info.location}>
                                        <Link href={`/${info.location}?latitude=${info.latitude}&longitude=${info.longitude}`}>
                                            {info.location}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                )
            }
        </div>
    );
};

export default LocaltionSwithcer;