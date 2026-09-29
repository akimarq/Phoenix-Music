'use client';
import { useEffect, useRef } from 'react';
import Script from 'next/script';
import { TrackData } from '../src/app/albums';
import { setPlaying } from './nowplaying';

export const TrackMore = ({ track }: { track: TrackData }) => {
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
            <div className="flex flex-col items-center justify-start h-200 w-175 bg-black rounded-lg text-white gap-5 sticky top-20 z-50 border border-white/10 animate-panel-in shadow-[0_3px_10px_rgb(0,0,0,0.5)]">
                <div className="flex flex-col items-center justify-center text-center text-white gap-3 pl-4 pr-4">
                    <div className="flex flex-row items-center justify-center w-full gap-2">
                        <div className="flex flex-col justify-center mt-10 w-90 text-center">
                            <p className="text-4xl font-light">{title}</p>
                            <p className="text-2xl font-light">{year}</p>
                        </div>
                        <div className="h-70 w-70 bg-[#161616] rounded-lg mt-5">
                            <iframe
                                ref={iframeRef}
                                title={`${title} player`}
                                width="100%"
                                height="300"
                                allow="autoplay; encrypted-media"
                                src={cover}
                            />
                        </div>
                    </div>
                    <div className="overflow-y-auto overflow-x-hidden h-110 w-full pl-2 pr-2 mt-5">
                        <p className="text-lg font-medium text-justify whitespace-pre-wrap">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};