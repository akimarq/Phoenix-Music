'use client';
import { useState } from 'react';
import { Track } from './track';
import { TrackMore } from './trackmore';
import { albums } from '../src/app/albums';

export function TrackList({
    slug,
    album,
    sections,

}: {
    slug: string;
    album: typeof albums[0];
    sections: { name: string; tracks: typeof album.tracks }[];
}) {
    const [selected, setSelected] = useState<typeof album.tracks[0] | null>(null);
    return (
        <div>
            {/* Tracklist area */}  
            <div className="flex flex-row gap-10 w-screen justify-center">
                {/* track list */}
                <div className="flex flex-col items-center justify-center gap-10">
                {sections.map((section) => (
                    <div key={section.name}>
                    {section.name !== "" && (
                        <p className="text-5xl font-semibold mb-10">{section.name}</p>
                    )}
                        <div className="grid grid-cols-[auto_auto_auto] gap-5 mb-10">
                            {section.tracks.map((track) => (
                            <Track
                                onToggle={() =>
                                    setSelected((current) =>
                                    current?.title === track.title ? null : track
                                        
                                    )
                                }
                                slug={album.slug}
                                key={track.title}
                                group=""
                                title={track.title}
                                year={track.year}
                                dedication={track.dedication}
                                isCompact={selected !== null}
                            />
                            ))}
                        </div>
                    </div>
                    ))}
                </div>
                {/* track more  info */}
                <div className={`sticky top-15 z-50 self-start overflow-hidden transition-[width] duration-200 ease-out ${selected ? "w-175" : "w-0"}`}>
                    <div className="w-175">
                        {selected ? <TrackMore track={selected}/> : null}
                    </div>
                </div>
            </div>
        </div>
    );}

    
    
    
