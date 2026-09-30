'use client';
import { useState } from 'react';

export default function Popup() {
    const [isVisible, setIsVisible] = useState(true);
        if(!isVisible) return null;

    return (
        <div>
            <div className="fixed top-0 left-0 p-10 lg:p0 w-full h-full bg-black/95 flex flex-col items-center justify-center z-50 border border-white/10 rounded-lg gap-10">
                <h1 className="text-white text-2xl font-light text-center">For the best experience, please turn on your audio to fully enjoy the interactive sounds and soundtrack.</h1>
                <button onClick={() => setIsVisible(false)} 
                className="bg-white text-2xl lg:text-xl font-light text-center text-black px-4 py-2 rounded-md hover:bg-gray-200 transition-all duration-150 hover:scale-105 hover:cursor-pointer">
                    Continue
                </button>
            </div>
        </div>
    )
}