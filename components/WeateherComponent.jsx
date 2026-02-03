import { getWeatherData } from '@/lib/weather-info';
import React from 'react';
import Card from './Card';
import Image from 'next/image';

const WeateherComponent = async ({ lat, lon }) => {
    const {main, description} = await getWeatherData(lat, lon)
    return (
        <Card>
            <h6 class="feature-name">Current Weather</h6>
            <div class="feature-main">
                <Image
                    width={60}
                    height={60}
                    class="max-w-20"
                    src="/icon_rain.png"
                    alt="rain icon"
                />
                <h3 class="feature-title">{main}</h3>
                <span class="feature-name">{description}</span>
            </div>
        </Card>
    );
};

export default WeateherComponent;