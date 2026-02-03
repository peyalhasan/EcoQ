import React from 'react';
import Card from './Card';
import Link from 'next/link';

function NoLocationInfo({ location }) {
    return (
        <Card>
            <div className="flex flex-col items-center justify-center py-8 text-center">
                <div className="bg-red-50 p-4 rounded-full mb-4">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className="w-10 h-10 text-red-500"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                </div>

                <h2 className="text-xl font-semibold  mb-2">
                    No Information Found
                </h2>
                
                <p className="text-gray-00 mb-6 max-w-[250px]">
                    No Location available for <span className="font-bold text-white">{location}</span>. 
                </p>

                <Link 
                    href="/" 
                    className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-pink-700 transition-colors shadow-sm text-sm font-medium"
                >
                    Back to Home
                </Link>
            </div>
        </Card>
    );
}

export default NoLocationInfo;