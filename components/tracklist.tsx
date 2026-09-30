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
        <div className="w-full min-w-0 max-w-full">
            {/* Tracklist area */}  
            <div className="flex w-full min-w-0 max-w-full flex-col justify-center gap-10 sm:flex-row sm:justify-center">
                {/* track list */}
                <div className="flex w-full min-w-0 max-w-full flex-col items-center justify-center gap-10 sm:w-auto">
                {sections.map((section) => (
                    <div key={section.name} className="w-full min-w-0 max-w-full">
                    {section.name !== "" && (
                        <p className="mb-10 w-full px-4 text-center text-3xl font-semibold text-shadow-[0_3px_10px_rgb(0,0,0,1)] sm:text-5xl">{section.name}</p>
                    )}
                        <div className="grid mx-auto mb-10 grid-cols-[auto_auto] w-fit max-w-full min-w-0 gap-5 sm:grid-cols-[auto_auto_auto]">
                            {section.tracks.map((track) => (
                            <Track
                                onToggle={() =>
                                    setSelected((current) =>
                                    current?.title === track.title ? null : track
                                        
                                    )
                                }
                                slug={album.slug}
                                key={track.title}
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
                <div className={`z-50 w-full max-sm:fixed max-sm:inset-x-0 max-sm:bottom-0 max-sm:overflow-x-hidden max-sm:transition-transform max-sm:duration-300 max-sm:ease-out
                        ${selected ? "max-sm:translate-y-0" : "max-sm:translate-y-full"}
                        sm:sticky sm:top-15 sm:shrink-0 sm:self-start sm:overflow-hidden sm:transition-[width] sm:duration-200 sm:ease-out
                        ${selected ? "sm:w-[45.75rem]" : "sm:w-0"}`}>
                    <div className="w-full sm:w-[45.75rem] sm:p-4">
                        {selected ? <TrackMore key={selected.title} track={selected} onClose={() => setSelected(null)} /> : null}
                    </div>
                </div>
            </div>
        </div>
    );}

    
    
    
//     <div className={`fixed sm:sticky top-15 z-50 self-start overflow-hidden transition-[width] duration-200 ease-out ${selected ? "w-[45.75rem]" : "w-0"}`}>
    //     <div className="w-[45.75rem] p-4">
    //         {selected ? <TrackMore key={selected.title} track={selected} /> : null}
    //     </div>
//      </div>