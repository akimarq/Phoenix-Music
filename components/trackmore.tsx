'use client';
import { useEffect, useRef } from 'react';
import Script from 'next/script';
import { TrackData } from '../src/app/albums';
import { setPlaying } from './nowplaying';

export const TrackMore = ({ track, onClose }: { track: TrackData, onClose: () => void }) => {
    const { title, year, description, cover, dedication } = track;
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const boundRef = useRef(false);

    const connect = () => {
        if (boundRef.current || !iframeRef.current || !window.SC) return;
        const widget = window.SC.Widget(iframeRef.current);
        const { Events } = window.SC.Widget;
        widget.bind(Events.PLAY, () => setPlaying(title, dedication, true));
        widget.bind(Events.PAUSE, () => setPlaying(title, dedication, false));
        widget.bind(Events.FINISH, () => setPlaying(title, dedication, false));
        boundRef.current = true;
    };

    useEffect(() => () => setPlaying(title, dedication, false), [title, dedication]);

    return (
        <div>
            <Script id="soundcloud-widget-api" src="https://w.soundcloud.com/player/api.js" onReady={connect} />
            <div className="flex flex-col items-center justify-start sm:h-200 sm:w-175 bg-black rounded-lg text-white gap-5 sticky top-20 z-50 border border-white/10 animate-panel-in shadow-[0_3px_10px_rgb(0,0,0,0.5)] sm:mt-25">
            <button type="button" onClick={onClose} className="sm:hidden mt-5" aria-label="Close cursor-pointer">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
            </svg>
            </button>
                <div className="flex flex-col items-center justify-center text-center text-white gap-3 pl-4 pr-4">
                    <div className="flex flex-col-reverse sm:flex-row items-center justify-center w-full gap-2">
                        <div className="flex flex-col justify-center sm:mt-10 mt-5 w-full sm:w-90 text-center">
                            <p className="sm:text-4xl font-light">{title}</p>
                            <p className="sm:text-2xl font-light">{year}</p>
                        </div>
                        <div className="h-50 w-full overflow-hidden sm:h-70 sm:w-70 sm:mt-10">
                        <iframe
                            className="h-[200%] w-[200%] origin-top-left scale-50 sm:h-full sm:w-full sm:scale-100"
                            title={`${title} player`}
                            allow="autoplay; encrypted-media"
                            src={cover}
                            ref={iframeRef}
                        />
                        </div>
                    </div>
                    <div className="overflow-y-auto overflow-x-hidden w-full h-90 sm:h-110 sm:w-full pl-2 pr-2 sm:mt-5">
                        <p className="sm:text-lg text-justify whitespace-pre-wrap">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// return (
//     <div>
//         <Script id="soundcloud-widget-api" src="https://w.soundcloud.com/player/api.js" onReady={connect} />
//         <div className="flex flex-col items-center justify-start h-200 w-175 bg-black rounded-lg text-white gap-5 sticky top-20 z-50 border border-white/10 animate-panel-in shadow-[0_3px_10px_rgb(0,0,0,0.5)]">
//             <div className="flex flex-col items-center justify-center text-center text-white gap-3 pl-4 pr-4">
//                 <div className="flex flex-row items-center justify-center w-full gap-2">
//                     <div className="flex flex-col justify-center mt-10 w-90 text-center">
//                         <p className="text-4xl font-light">{title}</p>
//                         <p className="text-2xl font-light">{year}</p>
//                     </div>
//                     <div className="h-70 w-70 bg-[#161616] rounded-lg mt-5">
//                         <iframe
//                             ref={iframeRef}
//                             title={`${title} player`}
//                             width="100%"
//                             height="300"
//                             allow="autoplay; encrypted-media"
//                             src={cover}
//                         />
//                     </div>
//                 </div>
//                 <div className="overflow-y-auto overflow-x-hidden h-110 w-full pl-2 pr-2 mt-5">
//                     <p className="text-lg font-medium text-justify whitespace-pre-wrap">{description}</p>
//                 </div>
//             </div>
//         </div>
//     </div>
// );
// };