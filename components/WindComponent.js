import React from 'react';
import Card from './Card';
import { getWindData } from '@/lib/weather-info';
import Image from 'next/image';

const WindComponent = async ({ lat, lon }) => {
    const { speed, deg } = await getWindData(lat, lon)
    return (
        <Card>
            <h6 className="feature-name">Wind</h6>
            <div className="feature-main">
                <Image
                    width={60}
                    height={60}
                    className="max-w-20"
                    src="/icon_wind.png"
                    alt="rain icon"
                />
                <h3 className="text-xl font-bold ">{speed} meter/sec</h3>
                <span className="feature-name">{deg} degrees</span>
            </div>
        </Card>
    );
};

export default WindComponent;